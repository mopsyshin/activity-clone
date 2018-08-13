<template>
  <div class="category-select-list-container">
    <category-select-item v-for="item in categoryItems" :key="item.key" :options="item"/>
  </div>
</template>

<script>
import CategorySelectItem from '@/components/CategorySelectItem.vue';

export default {
  data() {
    return {
      categoryItems: [
        {
          badgeState: false,
          categoryType: false,
          // eslint-disable-next-line global-require
          iconUrl: require('@/assets/img/ic_category_item_waterpark.svg'),
          titleText: '워터파크',
        },
        {
          badgeState: false,
          categoryType: false,
          // eslint-disable-next-line global-require
          iconUrl: require('@/assets/img/ic_category_item_leports_on_the_water.svg'),
          titleText: '수상레저',
        },
        {
          badgeState: false,
          categoryType: false,
          // eslint-disable-next-line global-require
          iconUrl: require('@/assets/img/ic_category_item_themepark.svg'),
          titleText: '테마파크',
        },
        {
          badgeState: false,
          categoryType: false,
          // eslint-disable-next-line global-require
          iconUrl: require('@/assets/img/ic_category_item_extream.svg'),
          titleText: '익스트림',
        },
        {
          badgeState: false,
          categoryType: false,
          // eslint-disable-next-line global-require
          iconUrl: require('@/assets/img/ic_category_item_indoor.svg'),
          titleText: '실내체험',
        },
        {
          badgeState: false,
          categoryType: false,
          // eslint-disable-next-line global-require
          iconUrl: require('@/assets/img/ic_category_item_tour.svg'),
          titleText: '투어∙관람',
        },
        {
          badgeState: false,
          categoryType: false,
          // eslint-disable-next-line global-require
          iconUrl: require('@/assets/img/ic_category_item_kids.svg'),
          titleText: '키즈',
        },
        {
          badgeState: false,
          categoryType: false,
          // eslint-disable-next-line global-require
          iconUrl: require('@/assets/img/ic_category_item_festival.svg'),
          titleText: '축제∙공연',
        },
        {
          badgeState: false,
          categoryType: true,
          // eslint-disable-next-line global-require
          iconUrl: require('@/assets/img/ic_category_item_all.svg'),
          titleText: '전체 액티비티',
        },
      ],
    };
  },
  components: {
    CategorySelectItem,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';

.category-select-list-container {
  background-color: $nd04;
  @extend %flex-between-center;
  flex-wrap: wrap;
  padding-top: 4px;
}
</style>

