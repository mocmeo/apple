<template>
  <div class="mac-tiles">
    <div class="row-full">
      <div class="title">Valentine’s Day gifts for what they love.</div>
      <div class="desc">
        Order by 12:00 p.m. on February 13 to get two‑hour delivery for just $5.
        See checkout for availability.
      </div>
      <button class="btn-shop">Shop</button>
      <div class="tiles">
        <div class="creativity">
          <img
            class="creativity-img"
            :src="genTileImage('photography')"
            alt=""
          />
          <div class="text">
            <p>For lovers of</p>
            <p>photography.</p>
          </div>
        </div>
        <div class="music">
          <img class="music-img" :src="genTileImage('music')" alt="" />
          <div class="text">
            <p>For lovers</p>
            <p>of music.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="apple-card">
      <img :src="genTileImage('apple-card')" alt="" />
      <div class="details">
        <div class="title">Get 3% Daily Cash back with Apple Card.</div>
        <div class="subtitle">
          And pay for your new iPhone over 24 months, interest‑free when you
          choose Apple Card Monthly Installments.
        </div>
        <button class="btn-learn">Learn more</button>
      </div>
    </div>

    <div class="row">
      <div class="trade-in">
        <img :src="genTileImage('trade-in')" />
        <div class="title">Trade in your smartphone for credit.</div>
        <div class="desc">
          With Apple Trade In, you can get credit toward a new iPhone when you
          trade in an eligible smartphone. It’s good for you and the planet.
        </div>
        <button class="btn-learn">Learn more</button>
      </div>
      <div class="upgrade">
        <div class="title">
          The easiest way to upgrade to the latest iPhone.
        </div>
        <div class="desc">
          Just trade in your eligible computer for credit or recycle it for
          free. It’s good for you and the planet.
        </div>
        <button class="btn-learn">Learn more</button>
        <img :src="genTileImage('upgrade')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IphoneTiles',

  methods: {
    genTileImage(path) {
      return this.$assetsUrl(`pages/iphone/tiles/${path}.jpg`);
    },
  },
};
</script>

<style lang="scss" scoped>
.mac-tiles {
  @include sizeWH(100%, auto);
  position: relative;
}

.row-full {
  @include flexCenter(column);
  @include sizeWH(100%, 4.6rem);
  justify-content: flex-start;
  background: #fff;
  padding-top: 0.3rem;

  .title {
    @include textMixin(#000, 0.4rem, bold);
    font-family: 'San Francisco Regular', sans-serif;
  }
  .desc {
    @include textMixin(#000, 0.18rem);
    margin: 0.07rem auto;
  }
  .btn-shop {
    @include textMixin(#0171e3, 0.16rem);
    border: none;
    background: none;
    margin-top: 0.05rem;
  }
  .tiles {
    @include flexCenter(row);
    width: 100%;
    .creativity {
      @include sizeWH(47%, 2.6rem);
      background: #f5f5f7;
      margin-top: 0.2rem;
      margin-right: 0.15rem;
      border-radius: 0.25rem;
      text-align: left;
      padding-left: 0.4rem;
      padding-top: 0.3rem;
      position: relative;

      .text {
        @include position(absolute, $top: 1rem, $right: 0.3rem);
        font-family: 'San Francisco Regular', sans-serif;
        p {
          @include textMixin(#000, 0.23rem, bold);
          &:nth-child(2) {
            color: #8e70ff;
          }
        }
      }

      .creativity-img {
        @include position(absolute, $top: 0.35rem, $left: 0);
        @include sizeWH(auto, 2.1rem);
      }
    }
    .music {
      @extend .creativity;
      margin-right: 0;
      margin-left: 0.15rem;

      .text {
        @include position(absolute, $top: 1rem, $left: 0.2rem);
        p:nth-child(2) {
          color: #ff0031;
        }
      }

      .music-img {
        @include position(absolute, $top: 0rem, $right: 0rem);
        @include sizeWH(auto, 100%);
        border-top-right-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
      }
    }
  }
}

.apple-card {
  @include sizeWH(100%, 4.6rem);
  @include flexCenter(row);
  background: #fff;
  margin-top: 0.3rem;

  img {
    @include sizeWH(5.6rem, auto);
    margin-right: 0.3rem;
    margin-left: 0.2rem;
  }

  .details {
    margin-right: 0.2rem;
    .title {
      @include textMixin(#000, 0.37rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      margin: 0 auto;
      width: 4rem;
    }
    .subtitle {
      @include textMixin(#000, 0.16rem);
      margin: 0.1rem auto 0;
      width: 4rem;
    }
    .btn-learn {
      @include textMixin(#0171e3, 0.16rem);
      border: none;
      background: none;
    }
  }
}

.row {
  @include flexCenter(row);
  margin-top: 0.3rem;
  justify-content: space-around;

  .trade-in {
    @include sizeWH(49%, 5.4rem);
    margin-right: 0.3rem;
    background: #fff;
    position: relative;

    img {
      @include position(absolute, $bottom: 0.4rem, $left: 0);
      @include sizeWH(100%, 2rem);
      object-fit: cover;
      object-position: 28% 0;
    }
  }

  .upgrade {
    @extend .trade-in;
    margin-right: 0;

    img {
      @include sizeWH(100%, 2rem);
      @include position(absolute, $bottom: 0rem, $left: 0);
    }
  }

  .trade-in,
  .upgrade {
    .title {
      @include textMixin(#000, 0.37rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      margin: 0.35rem auto 0;
      width: 70%;
    }
    .desc {
      @include textMixin(#000, 0.17rem);
      margin: 0.15rem auto;
      width: 80%;
    }
    .btn-learn {
      @include textMixin(#0171e3, 0.16rem);
      border: none;
      background: none;
    }
  }
}
</style>
