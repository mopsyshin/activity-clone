<template>
  <div class="list-container">
    <list-item-panorama v-for="item in 10" :key="item.key"/>
  </div>
</template>

<script>
import ListItemPanorama from '@/components/listitem/ListItemPanorama.vue';

export default {
  components: {
    ListItemPanorama,
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';

</style>
