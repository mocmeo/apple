<template>
  <div class="product-show-design">
    <div class="container">
      <div class="title">All-in-one design. More creative freedom.</div>
      <div class="desc">
        iMac Pro puts the power of a workstation behind a stunning Retina 5K
        display, in a sleek enclosure just 5 mm wide at its edge. With your
        whole system powered by a single cable, your workspace stays free of
        clutter. It’s a beautifully efficient design that lets you focus all
        your attention on what you’re creating — not what you’re creating with.
      </div>
      <img class="design" :src="genLink('design.jpg')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowDesign',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-design {
  @include sizeWH(100%, auto);
  text-align: left;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  background: #1a1a1a;

  .container {
    @include sizeWH(60%, auto);
    margin: 0 auto;

    .title {
      @include textMixin(#fff, 0.3rem, bold);
      border-bottom: #515151 solid 0.015rem;
      padding-bottom: 0.2rem;
      margin-bottom: 0.2rem;
    }
    .desc {
      @include textMixin(#fff, 0.17rem, bold);
      width: 6rem;
      line-height: 0.26rem;
    }
    .design {
      @include sizeWH(9rem, auto);
      margin: 0.5rem auto 0;
    }
  }
}
</style>
