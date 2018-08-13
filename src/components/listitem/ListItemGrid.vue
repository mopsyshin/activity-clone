<template>
  <div class="list-item-grid-container">
    <div class="wrapper-img">
      <img src="">
    </div>
    <div class="wrapper-info">
      <div class="title">
        상품 제목
      </div>
      <div class="price">
        00,000원
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';

.list-item-grid-container {
  width: calc(50vw - 28px);
  .wrapper-img {
    width: 100%;
    height: calc((50vw - 28px) * 11 / 14);
    border-radius: 16px;
    background-color: $ex-color;
    overflow: hidden;
  }
  .wrapper-info {
    font-size: 16px;
    margin: 8px 0px 21px;
    color: $color-text-dark-primary;
  }
}

</style>
