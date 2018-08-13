<template>
  <div class="theme-list-container">
    <section-header :options="listHeaderOption"/>
    <div class="list-wrapper">
      <theme-select-item v-for="item in items" :key="item.key" :options="item"/>
    </div>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import ThemeSelectItem from '@/components/ThemeSelectItem.vue';

export default {
  props: {
    listHeaderOption: Object,
  },
  data() {
    return {
      items: [
        {
          imgUrl: 'http://via.placeholder.com/150x150',
          title: '아이와 함께',
        },
        {
          imgUrl: 'http://via.placeholder.com/150x150',
          title: '이색 데이트',
        },
        {
          imgUrl: 'http://via.placeholder.com/150x150',
          title: '혼자어때',
        },
      ],
    };
  },
  components: {
    SectionHeader,
    ThemeSelectItem,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';

.theme-list-container {
  .list-wrapper {
    width: 100vw;
    padding: 0px 24px;
    @extend %flex-between-center;
  }
}

</style>

