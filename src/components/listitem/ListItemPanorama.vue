<template>
  <div class="listitem-panorama-container">
    <div class="wrapper-img">
      <img src="">
    </div>
    <div class="wrapper-info">
      <div class="info-header">
        <div class="title">
          상품 제목
        </div>
        <div class="desc">
          상품 소개
        </div>
        <div class="desc location">
          지역 정보
          <div class="ic-star">
            <object ref="svg" :data="require('@/assets/img/ic_star.svg')"></object>
          </div>
          8.0
          <span class="review-count">(1,999)</span>
        </div>
      </div>
      <div class="info-footer">
        <div class="origin-price">
          00,000
        </div>
        <div class="result-price">
          <span class="discount">50%</span>
          <span class="badge">반값</span>
          00,000원
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setSvgClass() {
      const target = this.$refs.svg;
      let svgDoc;
      let path;
      target.addEventListener('load', () => {
        svgDoc = target.contentDocument;
        path = svgDoc.getElementsByTagName('path');
        path[0].style.fill = 'rgb(255,191,30)';
      });
    },
  },
  mounted() {
    this.setSvgClass();
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';
.listitem-panorama-container {
  width: 100%;
  margin-top: 8px;
  padding: 0px 24px;
  margin-bottom: 24px;
  .wrapper-img {
    width: calc(100vw - 48px);
    height: calc((100vw - 48px) / 2);
    border-radius: 16px 16px 16px 2px;
    background-color: $ex-color;
    overflow: hidden;
  }
  .wrapper-info {
    width: calc(100vw - 48px);
    color: $color-text-dark-primary;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    .info-header {
      width: 100%;
      .title {
        width: 100%;
        font-size: 16px;
        font-weight: 700;
        color: $color-text-dark-primary;
      }
      .desc {
        font-size: 14px;
        color: $color-text-dark-secondary;
        margin-top: 2px;
        .ic-star {
          width: 16px;
          height: 16px;
          display: inline-block;
          // margin: 0px 4px;
          transform: translateY(3px);
          object {
            width: 100%;
            height: 100%;
          }
        }
        &.location {
          margin-top: 0px;
        }
        .review-count {
          color: $color-text-dark-hinted;
          // margin-left: 4px;
        }
      }
    }
    .info-footer {
      margin-top: 4px;
      width: 100%;
      text-align: right;
      .origin-price {
        font-size: 13px;
        color: $color-text-dark-hinted;
        text-decoration: line-through;
      }
      .result-price {
        font-size: 18px;
        font-weight: 700;
        color: $color-text-dark-primary;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .discount {
          color: $r500;
          margin-right: 4px;
        }
        .badge {
          color: $nls100;
          background-color: $r500;
          border-radius: 2px;
          font-size: 10px;
          font-weight: 700;
          height: 14px;
          padding: 0px 4px;
          margin-right: 4px;
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>
