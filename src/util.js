export default {
  getVideoData(category_id, obj) {
    for(let i = 1; i < 5; i++) {
      axios.get("/api/dynamic/region?rid=" + category_id + "&pn=" + i)
        .then((data) => {
          console.log(data)
          if(data.data.code === 0) {
            obj.cur_content = obj.cur_content.concat(data.data.data.archives);
          }
        });
    }
  }
}