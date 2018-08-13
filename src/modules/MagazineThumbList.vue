<template>
  <div class="magazine-thumb-list-container">
    <section-header :options="listHeaderOption" />
     <swiper :options="sliderOption">
      <swiper-slide></swiper-slide>
      <swiper-slide></swiper-slide>
      <swiper-slide></swiper-slide>
      <swiper-slide></swiper-slide>
      <swiper-slide></swiper-slide>
      <swiper-slide></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
  props: {
    listHeaderOption: Object,
  },
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
    SectionHeader,
    swiper,
    swiperSlide,
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';

.magazine-thumb-list-container {
  margin-bottom: 8px;
  .swiper-container {
    width: 100%;
    height: calc(100vw - 55px);
  }
  .swiper-slide {
    width: calc(100vw - 135px);
    height: calc(100vw - 55px);
    background-color: $ex-color;
    border-radius: 10px;
    transform: translateX(calc(((100vw - (100vw - 135px)) - 40px) / -2 ));
  }
}

</style>
