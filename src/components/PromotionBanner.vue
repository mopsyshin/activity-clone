<template>
  <div class="home-header">
    <div class="bi-container">
      <img src="@/assets/img/img_brand_logo_activity.svg">
    </div>
    <swiper :options="sliderOption">
      <swiper-slide v-for="item in 5" :key="item.key"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
  data() {
    return {
      sliderOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 8,
        grabCursor: true,
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';

.bi-container {
  @extend %flex-start-center;
  height: 40px;
  padding: 4px 24px 0px;
}
.swiper-container {
  width: 100%;
  height: calc(100vw - 48px);
}
.swiper-slide {
  width: calc(100vw - 48px);
  background-color: $ex-color;
  border-radius: 10px;
  transition: all 0.2s;
}
</style>

