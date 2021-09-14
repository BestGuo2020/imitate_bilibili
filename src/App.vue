<template>
  <div id="app">
    <Main/>
  </div>
</template>

<style>

  @import url(https://s1.hdslb.com/bfs/static/jinkela/mstation-h5/css/mstation.4.fe7e458082ef5af1d663dd1b65f365d1b753903f.css);

  body {
    margin: 0 auto;
    width: 100%;
    overflow-x: hidden;
  }

  .router-link-exact-active, .router-link-active {
    color: #fb7299;
  }

</style>

<script>
  import Main from '@/views/Main'

  export default {
    name: "App",
    components: {
      Main
    }
  }

</script>
