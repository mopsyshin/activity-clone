<template>
  <div class="theme-list-item-container">
    <div class="wrapper-image">
      <img :src="options.imgUrl">
    </div>
    <div class="wrapper-title">
      {{ options.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      imgUrl: String,
      title: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';

.theme-list-item-container {
  .wrapper-image {
    width: calc(33vw - 24px);
    height: calc(33vw - 24px);
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .wrapper-title {
    text-align: center;
    font-size: 14px;
    margin: 8px 0px;
    color: $color-text-dark-primary;
  }
}
</style>

