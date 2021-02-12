<template>
  <BaseLayout>
    <div class="page-mac">
      <div class="products">
        <div class="product" v-for="(product, i) in productIcons" :key="i">
          <img class="icon" :src="genIcon(product.img)" />
          <div class="name">{{ product.name }}</div>
        </div>
      </div>
      <div class="cashback">
        Get 3% Daily Cash back with Apple Card. And pay for your new iPad over
        12 months, interest‑free when you choose Apple Card Monthly
        Installments.* Learn more
      </div>

      <IpadShowcase />

      <div class="wrapper">
        <IpadCompare />
        <IpadTiles />
        <IpadGetMore />
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import IpadShowcase from './IpadShowcase.vue';
import IpadCompare from './IpadCompare.vue';
import IpadTiles from './IpadTiles.vue';
import IpadGetMore from './IpadGetMore.vue';

export default {
  name: 'Mac',

  components: {
    BaseLayout,
    IpadShowcase,
    IpadCompare,
    IpadTiles,
    IpadGetMore,
  },

  data() {
    return {
      productIcons: [
        { name: 'iPad Pro', img: 'ipad-pro' },
        { name: 'iPad Air', img: 'ipad-air' },
        { name: 'iPad', img: 'ipad-light' },
        { name: 'iPad Mini', img: 'ipad-mini' },
        { name: 'Compare', img: 'ipad-compare' },
        { name: 'Apple Pencil', img: 'apple-pencil' },
        { name: 'Keyboards', img: 'keyboard' },
        { name: 'Airpods', img: 'airpods' },
        { name: 'Accessories', img: 'accessories' },
        { name: 'iPadOS', img: 'ipad-os' },
      ],
    };
  },

  methods: {
    genIcon(path) {
      return this.$assetsUrl(`product-icons/ipad/${path}.svg`);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-mac {
  @include sizeWH(100%, auto);
  position: relative;
}

.products {
  @include sizeWH(100%, 1.15rem);
  @include flexCenter(row);
  background: #fbfbfd;
  padding-left: 0.2rem;

  .product {
    @include position(relative, $top: -0.08rem);
    margin-right: 0.27rem;
    cursor: pointer;

    .icon {
      @include sizeWH(0.5rem, 0.5rem);
    }
    .name {
      @include textMixin(#000, 0.13rem);
    }

    &:hover {
      .name {
        color: #1976d2;
      }
    }
  }
}

.cashback {
  @include sizeWH(100%, 0.43rem);
  @include textMixin(#000, 0.13rem);
  padding-top: 0.14rem;
  background: #f5f5f7;
}

.wrapper {
  @include sizeWH(100%, auto);
  background: #f5f5f7;
  padding: 0.3rem 0.7rem;
}
</style>