  <template>
  <div class="category-select-item-container" ref="touchItem" @click="toRoute('list-view')">
    <div class="wrapper-badge">
      <div class="badge" v-if="options.badgeState">
        {{ options.badgeText }}
      </div>
    </div>
    <div class="wrapper-icon">
      <object :data="options.iconUrl" ref="svg"></object>
    </div>
    <div class="wrapper-title">
      {{ options.titleText }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      badgeState: Boolean,
      badgeText: String,
      categoryType: Boolean,
      iconUrl: String,
      titleText: String,
    },
  },
  mounted() {
    this.registTouchEvent();
    if (this.options.categoryType) {
      this.setSvgClass();
    }
  },
  methods: {
    toRoute(view) {
      this.$router.push({ name: view, params: { type: 'category' } });
    },
    setSvgClass() {
      const target = this.$refs.svg;
      let svgDoc;
      let path;
      target.addEventListener('load', () => {
        svgDoc = target.contentDocument;
        path = svgDoc.getElementsByTagName('path');
        path[0].style.fill = 'rgba(0,0,0,0.16)';
      });
    },
    registTouchEvent() {
      const target = this.$refs.touchItem;
      const tObject = target.getElementsByTagName('object');
      let svgDoc;
      if (target !== undefined) {
        target.addEventListener('touchstart', () => {
          target.style.transform = 'scale(0.9)';
        });
        target.addEventListener('touchend', () => {
          target.style.transform = 'scale(1)';
        });
        tObject[0].addEventListener('load', () => {
          svgDoc = tObject[0].contentDocument;
          svgDoc.getElementsByTagName('svg')[0].addEventListener('touchstart', () => {
            target.style.transform = 'scale(0.9)';
          });
          svgDoc.getElementsByTagName('svg')[0].addEventListener('touchend', () => {
            target.style.transform = 'scale(1)';
          });
        });
      }
    },
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';

.category-select-item-container {
  transition: all 0.2s;
  background-color: $nls100;
  width: calc((100vw / 3) - 2.3px);
  height: calc((100vw / 3) - 2.3px);
  @extend %flex-center-center;
  flex-direction: column;
  margin-bottom: 4px;
  .wrapper-badge {
    width: 100%;
    max-width: 50%;
    height: 16px;
    margin-bottom: 4px;
  }
  .wrapper-icon {
    width: 48px;
    height: 48px;
    margin-bottom: 6px;
    object {
      width: 100%;
      height: 100%;
      transition: all 0.2s;
    }
  }
  .wrapper-title {
    font-size: 14px;
    color: $color-text-dark-primary;
    padding-bottom: 14px;
  }
}
</style>
