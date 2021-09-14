<template>
  <div class="video-index">
    <div class="video-index-list">
      <VideoItem v-for="data in index_data" :title="data.title" :pic="data.pic" :key="data.bvid" :plays="data.stat.view" :danmaku="data.stat.like" :short_link="data.uri"/>
    </div>
  </div>
</template>

<script>
  import VideoItem from "../../components/VideoItem";

  // 首页请求接口：https://api.bilibili.com/x/web-interface/index/top/rcmd
  export default {
    name: "Index.vue",
    components: {
      VideoItem
    },
    data() {
      return {
        index_data: []
      }
    },
    mounted() {
      axios.get("/api/index/top/rcmd")
        .then((data) => {
          if(data.data.code === 0) {
            this.index_data = data.data.data.item;
            console.log(this, data);
          }
          console.log(this, data.data.code);
        })
    }
  }
</script>

<style scoped>

  .video-index-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 1.33333vw;
  }

  .video-index-item .card {
    position: relative;
  }
</style>