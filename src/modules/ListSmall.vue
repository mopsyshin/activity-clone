<template>
  <div class="list-small-container">
    <section-header :options="listHeaderOption"/>
    <div class="wrapper-list">
      <list-item-small v-for="item in 3" :key="item.key"/>
    </div>
    <button-list-more/>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import ListItemSmall from '@/components/listitem/ListItemSmall.vue';
import ButtonListMore from '@/components/ButtonListMore.vue';

export default {
  props: {
    listHeaderOption: Object,
  },
  components: {
    SectionHeader,
    ListItemSmall,
    ButtonListMore,
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';

.list-small-container {
  .wrapper-list {
    padding: 0px 24px;
    @extend %flex-between-center;
    flex-wrap: wrap;
  }
}

</style>
