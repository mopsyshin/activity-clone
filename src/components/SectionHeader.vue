<template>
  <div class="section-header">
    <div class="title">
      {{ options.title }}
    </div>
    <div class="sub-message" v-if="options.subMessageState">
      {{ options.subMessage }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      title: String,
      subMessageState: Boolean,
      subMessage: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';
.section-header {
  @extend %flex-between-center;
  height: 48px;
  padding: 0px 24px;
  .title {
    font-size: 18px;
    font-weight: 700;
    color: $color-text-dark-primary;
  }
  .sub-message {
    font-size: 14px;
    color: $color-text-dark-hinted;
  }
}
</style>

