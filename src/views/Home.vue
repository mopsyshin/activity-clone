<template>
  <div class="home">
    <promotion-banner/>
    <div class="v-area-8"></div>
    <theme-select-list :listHeaderOption="themelistHeaderOption"/>
    <div class="v-area-24"></div>
    <category-select-list/>
    <div class="v-area-24"></div>
    <magazine-thumb-list :listHeaderOption="magazinelistHeaderOption"/>
    <div class="v-area-24"></div>
    <list-grid :listHeaderOption="productlistHeaderOption1"/>
    <div class="v-area-24"></div>
    <list-small :listHeaderOption="productlistHeaderOption2"/>
    <div class="v-area-24"></div>
    <list-grid :listHeaderOption="productlistHeaderOption3"/>
    <div class="v-area-24"></div>
    <section-header :options="bottomCategorySelectListHeader"/>
    <category-select-list/>
    <div class="home-bottom-message">
      {{ homeBottomMessage }}
    </div>
  </div>
</template>

<script>
import PromotionBanner from '@/components/PromotionBanner.vue';
import ThemeSelectList from '@/modules/ThemeSelectList.vue';
import CategorySelectList from '@/modules/CategorySelectList.vue';
import MagazineThumbList from '@/modules/MagazineThumbList.vue';
import ListGrid from '@/modules/ListGrid.vue';
import ListSmall from '@/modules/ListSmall.vue';
import SectionHeader from '@/components/SectionHeader.vue';

export default {
  name: 'actibity-home',
  data() {
    return {
      themelistHeaderOption: {
        title: '여기어때 추천테마',
        subMessageState: false,
      },
      magazinelistHeaderOption: {
        title: "액티비티 매거진 '탐구생활'",
        subMessageState: false,
      },
      productlistHeaderOption1: {
        title: '도심에서 즐기는 이색 데이트',
        subMessageState: false,
      },
      productlistHeaderOption2: {
        title: '이득, 이번주 득템',
        subMessageState: false,
      },
      productlistHeaderOption3: {
        title: '한국에서도 이런걸 할 수 있었어?',
        subMessageState: false,
      },
      bottomCategorySelectListHeader: {
        title: '아직... 마음에 드는게 없니?',
        subMessageState: false,
      },
      homeBottomMessage: '여기까지야. 뿅.',
    };
  },
  components: {
    PromotionBanner,
    ThemeSelectList,
    CategorySelectList,
    MagazineThumbList,
    ListGrid,
    ListSmall,
    SectionHeader,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';

.home-bottom-message {
  text-align: center;
  margin: 48px 0px 80px;
}
</style>
