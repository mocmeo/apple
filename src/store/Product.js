import services from '@/services';
import utils from '@/utils';
import { withLoading, withErrorHandling } from './hooks';

const initialState = {
  profile: {
    accountId: 12343243,
    balances: null,
    region: null,
  },
  allProducts: {},
  myBag: [
    {
      id: 'iphone-12-pro',
      colorId: 0,
      modelId: 1,
      capacityId: 1,
      sizeId: -1,
      quantity: 2,
    },
  ],
  product: null,
  error: null,
  loading: false,
  openedPopup: null,
};

const UPDATE_PROFILE = 'UPDATE_PROFILE';
const UPDATE_CURRENT_PRODUCT = 'UPDATE_CURRENT_PRODUCT';
const UPDATE_ALL_PRODUCTS = 'UPDATE_ALL_PRODUCTS';
const UPDATE_BAG_ADD = 'UPDATE_BAG_ADD';
const UPDATE_BAG_REMOVE = 'UPDATE_BAG_REMOVE';

// common actions
const SET_ERROR = 'SET_ERROR';
const SET_LOADING = 'SET_LOADING';
const OPEN_POPUP = 'OPEN_POPUP';

const actions = {
  initData: withLoading(
    withErrorHandling(async ({ commit }) => {
      const [profile, allProducts] = await Promise.all([
        services.getProfile(),
        services.getAllProducts(),
      ]);

      commit(UPDATE_PROFILE, profile);
      commit(UPDATE_ALL_PRODUCTS, allProducts);
    }),
  ),

  addProductToBag({ commit }, product) {
    commit(UPDATE_BAG_ADD, product);
  },

  openPopup({ commit }, openedPopup) {
    commit(OPEN_POPUP, openedPopup);
  },

  closePopup({ commit }) {
    commit(OPEN_POPUP, null);
    commit(SET_ERROR, null);
  },

  setError({ commit }, error) {
    commit(SET_ERROR, error && utils.camelizeStr(error));
  },
};

const compareProducts = (itemA, itemB) => {
  if (itemA.id === itemB.id) {
    return (
      itemA.colorId === itemB.colorId &&
      itemA.modelId === itemB.modelId &&
      itemA.capacityId === itemB.capacityId &&
      itemA.sizeId === itemB.sizeId
    );
  }
  return false;
};

/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  [UPDATE_PROFILE](state, profile) {
    state.profile = profile;
  },
  [UPDATE_ALL_PRODUCTS](state, products) {
    state.allProducts = products;
  },
  [UPDATE_CURRENT_PRODUCT](state, product) {
    state.product = product;
  },
  [UPDATE_BAG_ADD](state, product) {
    let exist = false;
    state.myBag.forEach((item, i) => {
      if (compareProducts(item, product)) {
        state.myBag[i].quantity += 1;
        exist = true;
      }
    });

    if (!exist) {
      state.myBag.push({ ...product, quantity: 1 });
    }
  },
  [SET_ERROR](state, error) {
    state.error = error;
  },
  [SET_LOADING](state, loading) {
    state.loading = loading;
  },
  [OPEN_POPUP](state, openedPopup) {
    state.openedPopup = openedPopup;
  },
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
};
