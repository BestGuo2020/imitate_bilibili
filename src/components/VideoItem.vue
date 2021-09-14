<template>
  <a class="video-index-item" :href="short_link">
    <div class="card">
      <img v-lazy="pic">
      <div class="count">
        <div class="count-left">
          <i class="iconfont icon_shipin_bofangshu"></i> {{plays}}
        </div>
        <div class="count-right">
          <i class="iconfont icon_shipin_danmushu"></i> {{danmaku}}
        </div>
      </div>
    </div>
    <p class="title">{{title}}</p>
  </a>
</template>

<script>
  export default {
    props: ['plays', 'danmaku', 'title', 'pic', 'short_link'],
    name: "VideoItem",
    // data() {
    //   return {
    //     plays: this.plays,
    //     danmaku: this.danmaku,
    //     title: this.title,
    //     pic: this.pic
    //   }
    // }
  }
</script>

<style scoped>
  .video-index-item {
    width: 50%;
    padding: 2.13333vw 1.33333vw;
    box-sizing: border-box;
    display: inline-block;
    text-decoration: none;
  }

  .video-index-item .card {
    width: 100%;
    overflow: hidden;
  }

  .video-index-item img {
    width: 100%;
    /*display: block;*/
  }

  .video-index-item .title {
    font-size: 3.2vw;
    color: #212121;
    margin-top: 0.2vw;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .card {
    position: relative;
  }

  .card > .count {
    display: flex;
    justify-content: space-between;
    padding: 1.33333vw 1.6vw;
    position: absolute;
    bottom: 3px;
    box-sizing: border-box;
    width: inherit;
    background: linear-gradient(0deg,rgba(0,0,0,.85),transparent);
  }

  .count > .count-left, .count > .count-right {
    font-size: 3.2vw;
    color: white;
  }
</style>