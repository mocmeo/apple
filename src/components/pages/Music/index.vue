<template>
  <BaseLayout>
    <div class="page-music">
      <div class="container">
        <transition name="fade">
          <div class="products" v-if="show">
            <li
              class="product"
              v-for="(product, i) in productIcons"
              :key="i"
              @click="product.path && $router.push(product.path)"
            >
              <img class="icon" :src="genIcon(product.img)" />
              <div class="name">{{ product.name }}</div>
              <div class="new" v-if="product.new">New</div>
            </li>
          </div>
        </transition>
      </div>
      <div class="apple-one">
        Introducing Apple One. Bundle your favorite services and enjoy more of
        Apple for less.
      </div>

      <MusicShowcase />
      <MusicTiles />
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import MusicShowcase from './MusicShowcase.vue';
import MusicTiles from './MusicTiles.vue';

export default {
  name: 'Music',

  components: {
    BaseLayout,
    MusicShowcase,
    MusicTiles,
  },

  data() {
    return {
      show: false,
      productIcons: [
        {
          name: 'Apple Music',
          img: 'apple-music',
          // path: 'apple-music',
          new: true,
        },
        { name: 'Airpods', img: 'airpods', path: 'shop/airpods' },
        { name: 'Airpods Pro', img: 'airpods-pro', path: 'shop/airpods-pro' },
        {
          name: 'Airpods Max',
          img: 'airpods-max',
          path: 'shop/airpods-max',
          new: true,
        },
        {
          name: 'Homepod Mini',
          img: 'homepod-mini',
          path: 'shop/homepod-mini',
          new: true,
        },
        { name: 'Homepod', img: 'homepod', path: 'shop/homepod' },
        { name: 'iPod Touch', img: 'ipod-touch', path: 'shop/ipod-touch' },
        {
          name: 'Music Accessories',
          img: 'music-accessories',
          path: 'music-accessories',
        },
        {
          name: 'Gift Cards',
          img: 'gift-cards',
          path: 'gift-cards',
        },
      ],
    };
  },

  methods: {
    genIcon(path) {
      return this.$assetsUrl(`product-icons/music/${path}.svg`);
    },
  },

  mounted() {
    document.title = 'Music - Apple';
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.show = true;
    }, 150);
  },
};
</script>

<style lang="scss" scoped>
.page-music {
  @include sizeWH(100%, auto);
  position: relative;

  .container {
    @include sizeWH(100%, 0.9rem);
    background: #151515;
    padding-left: 0.2rem;
  }

  .products {
    @include flexCenter(row);

    .product {
      @include position(relative, $top: 0.08rem);
      @include flexCenter(column);
      align-self: flex-start;
      margin-right: 0.05rem;
      position: relative;
      text-decoration: none;
      cursor: pointer;

      .icon {
        @include sizeWH(0.42rem, 0.42rem);
      }
      .name {
        @include textMixin(#fff, 0.1rem);
        width: 0.8rem;
      }
      .new {
        @include textMixin(#e46917, 0.09rem);
      }

      &:hover {
        .name {
          color: #1976d2;
        }
      }
    }
  }

  .apple-one {
    @include sizeWH(100%, 0.4rem);
    @include textMixin(#fff, 0.117rem);
    padding-top: 0.12rem;
    background: #1d1d20;
  }
}

.wrapper {
  @include sizeWH(100%, auto);
  background: #f5f5f7;
  padding: 0.3rem 0.7rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s, margin-right 0.3s;
}
.fade-enter {
  opacity: 0;
  margin-right: -1rem;
}
.fade-leave-to {
  opacity: 0;
  margin-right: 1rem;
}
</style>
