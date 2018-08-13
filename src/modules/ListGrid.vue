<template>
  <div class="list-grid-container">
    <section-header :options="listHeaderOption"/>
    <div class="wrapper-list">
      <list-item-grid v-for="item in 4" :key="item.key"/>
    </div>
    <button-list-more/>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import ListItemGrid from '@/components/listitem/ListItemGrid.vue';
import ButtonListMore from '@/components/ButtonListMore.vue';

export default {
  props: {
    listHeaderOption: Object,
  },
  components: {
    SectionHeader,
    ListItemGrid,
    ButtonListMore,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';

.list-grid-container {
  .wrapper-list {
    padding: 0px 24px;
    @extend %flex-between-center;
    flex-wrap: wrap;
  }
}

</style>
