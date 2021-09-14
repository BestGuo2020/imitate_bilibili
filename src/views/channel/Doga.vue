<template>
  <div class="doga">
    <div class="navbar">
      <router-link v-for="i in sub_category" class="channel-item" :to="'/channel/' + category_id + '/' + i.item" :key="i.item">
        <span style="vertical-align: middle;">{{i.name}}</span>
      </router-link>
    </div>
    <div class="content-doga">
      <div class="mad-content">
        <VideoItem v-for="(data, index) in cur_content" :key="index" :danmaku="data.stat.danmaku" :pic="data.pic" :title="data.title" :plays="data.stat.view" :short_link="data.short_link"/>
      </div>
    </div>
  </div>
</template>

<script>
  import VideoItem from "../../components/VideoItem";
  import util from "../../util";
  export default {
    name: "Doga",
    props: ['sub_category_default_id', 'sub_category', 'category_id'],
    components: {VideoItem},
    data() {
      return {
        cur_content: [],
      }
    },
    watch: {
      $route: {
        handler: 'resetData'
      },
    },
    methods: {
      resetData(to, from) {
        console.log(to, from);
        let category = to.params.sub_category;
        this.cur_content.length = 0;
        util.getVideoData(this.sub_category_default_id, this);
      }
    },
    mounted() {
      if(this.sub_default_category_id !== undefined) {
        console.log(this.sub_default_category_id, "fd-----fdf-----");
        util.getVideoData(this.sub_category_default_id, this);
      }
    }
  }
</script>

<style scoped>

  .content-doga {
    position: static;
  }

  .navbar {
    width: 100vw;
    display: flex;
    flex-shrink: 1;
    overflow-x: auto;
    border-bottom: 1px #eee solid;
    position: fixed;
    z-index: 1;
    background: white;
    top: 22.66666666666666666666vw;
  }

  .navbar::-webkit-scrollbar {
    height: 0 !important;
    width: 0 !important;
  }

  .mad-content {
    padding: 0 1.33333vw;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    top: 10.66667vw;
  }
</style>