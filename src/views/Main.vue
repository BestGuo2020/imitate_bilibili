<template>
  <div class="main">
    <div class="head">
      <!-- 顶部导航栏 -->
      <div class="suspension">
        <div class="suspension-navbar">
          <!-- 左侧图标 -->
          <a class="logo">
            <i class="iconfont Navbar_logo" />
          </a>
          <!-- 右侧搜索框，头像，下载 App -->
          <div class="right">
            <!-- 搜索图标 -->
            <a class="search">
              <i class="iconfont ic_search_tab"/>
            </a>
            <!-- 登录按钮 -->
            <a class="user-face">
              <img src="//s1.hdslb.com/bfs/static/jinkela/long/images/login.png@48w_48h_1c.png" class="bfs-img">
            </a>
            <!-- 下载 app -->
            <div class="download-app" @click="download">
              <img src="//s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/navOpenApp.png" class="nav-open-app-img">
            </div>
          </div>
        </div>
      </div>
      <!-- 频道栏 -->
      <div class="channel">
        <router-link class="channel-item" to="/" :key="0" exact>
          <span style="vertical-align: middle;">首页</span>
        </router-link>
        <router-link v-for="i in channelItem" class="channel-item" :to="'/channel/' + i.item" :key="i.item">
          <span style="vertical-align: middle;">{{i.name}}</span>
        </router-link>
      </div>
    </div>
    <div class="content">
<!--      <router-view />-->
      <!-- 如果当前的路径是首页的时候 -->
      <Index v-if="curPath === '/'" />
      <!-- 如果是其它分类页 -->
      <Doga v-else :category_id="sub_category.item" :sub_category_default_id="sub_category.sub_default_category_id" :sub_category="sub_category.sub_category"/>
    </div>
  </div>
</template>

<script>

  import Index from "./channel/Index";
  import Doga from "./channel/Doga";

  export default {
    name: "Main",
    components: {
      Doga,
      Index
    },
    watch: {
      $route: {
        handler(to, from) {
          console.log(to, from);
          this.curPath = to.path;
          // 读取默认的 id
          this.category_id = to.params.category_id;
          // console.log(to.params.sub_category);
          // 判断类别是否未定义
          if(to.params.category !== undefined) {
            // 获取子类别
            this.sub_category = this.channelItem.filter((sub_category_item) => {
              // console.log(sub_category_item.item === parseInt(to.params.category), sub_category_item.item, to.params.category)
              // 筛选匹配项
              return sub_category_item.item === parseInt(to.params.category);
            })[0];
          }
        }
      },
    },
    methods: {
      download() {
        location.href = "http://d.bilibili.com/download_app.html?preUrl=http%3A" +
          "%2F%2Fm.bilibili.com%2Fchannel.html&schema=bilibili%3A%2F%2Fpegasus%2F" +
          "channel%2F211&h5awaken=cHZpZD1BMTFEOTcxNS0yNDFELUEyMDQtMz" +
          "I0OS1FMzY3QTIxMjUyMzM5NTYwOWluZm9jXzIxMV8xNjMxNjExNTA5MjI1JnVhPU1" +
          "vemlsbGElMkY1LjAlMjAoaVBob25lJTNCJTIwQ1BVJTIwaVBob25lJTIwT1MlMjAxM18" +
          "yXzMlMjBsaWtlJTIwTWFjJTIwT1MlMjBYKSUyMEFwcGxlV2ViS2l0JTJGNjA1LjEuMTU" +
          "lMjAoS0hUTUwlMkMlMjBsaWtlJTIwR2Vja28pJTIwVmVyc2lvbiUyRjEzLjAuMyUyME1v" +
          "YmlsZSUyRjE1RTE0OCUyMFNhZmFyaSUyRjYwNC4xJTIwRWRnJTJGOTMuMC40NTc3LjYzJ" +
          "mlzQXV0b09wZW49ZmFsc2UmYnNvdXJjZT11bmRlZmluZWQmJm9wZW5fYXBwX2Zyb21fdH" +
          "lwZT1oNSZvcGVuX2FwcF91dWlkPTBENUUwRkE4LUIxNkQtMDQ0Ny1FQjZCLUJEQkM3NTM" +
          "zNkE4Mjk2NjExaW5mb2Mmb3Blbl9hcHBfZ3JvdXBpZD0lN0IlMjJoNV91Z2N2aWRlb19u" +
          "ZXdfZW50cmFuY2UlMjIlM0ElMjIwJTIyJTJDJTIyaDVfdWdjdmlkZW9fcmVsYXRlUmVjb2" +
          "1fbGFiZWwlMjIlM0ElMjIyJTIyJTdEJm9wZW5fYXBwX3VybD1odHRwcyUzQSUyRiUyRm0u" +
          "YmlsaWJpbGkuY29tJTJGY2hhbm5lbCUyRjIxMSZvcGVuX2FwcF9hZGRpdGlvbj0lN0IlMj" +
          "JzcG1pZCUyMiUzQSUyMjMzMy40MDMuY2xpY2sudG9wRG93bmxvYWQlMjIlMkMlMjJncm91" +
          "cF9pZCUyMiUzQTEwJTJDJTIyYnNvdXJjZSUyMiUzQSUyMmRlZmF1bHQlMjIlMkMlMjJ1bm" +
          "lxdWVfayUyMiUzQW51bGwlMkMlMjJzZXNzaW9uSWQlMjIlM0ElMjJ4cHo4aG1wdHN3dyUy" +
          "MiUyQyUyMnVhU291cmNlJTIyJTNBJTIyJTIyJTJDJTIyc2hhcmVfdGltZXMlMjIlM0FudWxs" +
          "JTJDJTIyc2hhcmVfZnJvbSUyMiUzQSUyMiUyMiUyQyUyMnBhZ2V2aWV3X2lkJTIyJTNBJTIyN" +
          "zkzaGt4ZXZibTgwJTIyJTJDJTIyaDVfYnV2aWQlMjIlM0ElMjJBMTFEOTcxNS0yNDFELUEyMDQ" +
          "tMzI0OS1FMzY3QTIxMjUyMzM5NTYwOWluZm9jJTIyJTJDJTIyaXRlbV9pZCUyMiUzQSUyMjIxM" +
          "SUyMiUyQyUyMml0ZW1fbGFiZWwlMjIlM0ElMjIlMjIlMkMlMjJjaWQlMjIlM0E0MDY2NDIxOTklN0Q%3D"
      }
    },
    data() {
      return {
        curPath: "",
        category_id: "",
        sub_category: [],
        channelItem: [
          {
            name: "动画",
            item: 1,
            sub_default_category_id: 24,
            sub_category: [
              {
                name: "MAD·ADV",
                item: 24,
              },
              {
                name: "MMD·3D",
                item: 25
              },
              {
                name: "短片·手书·配音",
                item: 47,
              },
              {
                name: "手办·模玩",
                item: 210
              },
              {
                name: "特摄",
                item: 86
              }
            ]
          },
          {
            name: "番剧",
            item: 13,
            sub_default_category_id: 33,
            sub_category: [
              {
                name: "连载动画",
                item: 33,
              },
              {
                name: "完结动画",
                item: 32
              },
              {
                name: "咨询",
                item: 51,
              },
              {
                name: "官方延伸",
                item: 152
              }
            ]
          },
          {
            name: "国创",
            item: 167,
            sub_default_category_id: 153,
            sub_category: [
              {
                name: "国产动画",
                item: 153,
              },
              {
                name: "国产原创相关",
                item: 168
              },
              {
                name: "布袋戏",
                item: 169,
              },
              {
                name: "动态漫·广播剧",
                item: 210
              },
              {
                name: "咨询",
                item: 170
              }
            ]
          },
          {
            name: "音乐",
            item: 3,
            sub_default_category_id: 28,
            sub_category: [
              {
                name: "原创音乐",
                item: 28,
              },
              {
                name: "翻唱",
                item: 31
              },
              {
                name: "VOCALOID·UTAU",
                item: 30
              },
              {
                name: "电音",
                item: 194,
              },
              {
                name: "演奏",
                item: 59
              },
              {
                name: "MV",
                item: 193
              },
              {
                name: "音乐现场",
                item: 29
              }
            ]
          },
          {
            name: "舞蹈",
            item: 129,
            sub_default_category_id: 20,
            sub_category: [
              {
                name: "宅舞",
                item: 20,
              },
              {
                name: "街舞",
                item: 198
              },
              {
                name: "中国舞",
                item: 200
              },
              {
                name: "舞蹈综合",
                item: 154,
              },
              {
                name: "舞蹈教程",
                item: 156
              }
            ]
          },
          {
            name: "游戏",
            item: 4,
            sub_default_category_id: 17,
            sub_category: [
              {
                name: "单机游戏",
                item: 17,
              },
              {
                name: "电子竞技",
                item: 171
              },
              {
                name: "手机游戏",
                item: 172
              },
              {
                name: "网络游戏",
                item: 65,
              },
              {
                name: "桌游棋牌",
                item: 173
              },
              {
                name: "GMV",
                item: 121
              },
              {
                name: "音游",
                item: 136
              },
            ]
          },
          {
            name: "知识",
            item: 36,
            sub_default_category_id: 124,
            sub_category: [
              {
                name: "科学科普",
                item: 124,
              },
              {
                name: "社科·法律·心理",
                item: 201
              },
              {
                name: "人文历史",
                item: 228
              },
              {
                name: "财经商业",
                item: 207,
              },
              {
                name: "校园学习",
                item: 208
              },
              {
                name: "职业职场",
                item: 209
              }
            ]
          },
          {
            name: "科技",
            item: 188,
            sub_default_category_id: 95,
            sub_category: [
              {
                name: "数码",
                item: 95,
              },
              {
                name: "软件应用",
                item: 230
              },
              {
                name: "计算机技术",
                item: 231
              },
              {
                name: "工业·工程·机械",
                item: 232,
              },
              {
                name: "极客DIY",
                item: 233
              }
            ]
          },
          {
            name: "运动",
            item: 234,
            sub_default_category_id: 235,
            sub_category: [
              {
                name: "篮球·足球",
                item: 235,
              },
              {
                name: "健身",
                item: 164
              },
              {
                name: "竞技体育",
                item: 236
              },
              {
                name: "运动文化",
                item: 237,
              },
              {
                name: "运动综合",
                item: 238
              }
            ]
          },
          {
            name: "汽车",
            item: 223,
            sub_default_category_id: 176,
            sub_category: [
              {
                name: "汽车生活",
                item: 176,
              },
              {
                name: "汽车文化",
                item: 224
              },
              {
                name: "汽车极客",
                item: 225
              },
              {
                name: "智能出行",
                item: 226,
              },
              {
                name: "购车攻略",
                item: 227
              }
            ]
          },
          {
            name: "生活",
            item: 160,
            sub_default_category_id: 138,
            sub_category: [
              {
                name: "搞笑",
                item: 138,
              },
              {
                name: "家居房产",
                item: 239
              },
              {
                name: "手工",
                item: 161
              },
              {
                name: "绘画",
                item: 162,
              },
              {
                name: "日常",
                item: 21
              },
              {
                name: "其它",
                item: 174
              }
            ]
          },
          {
            name: "美食",
            item: 211,
            sub_default_category_id: 76,
            sub_category: [
              {
                name: "美食制作",
                item: 76,
              },
              {
                name: "美食侦探",
                item: 212
              },
              {
                name: "美食测评",
                item: 213
              },
              {
                name: "田园美食",
                item: 214,
              },
              {
                name: "美食记录",
                item: 215
              }
            ]
          },
          {
            name: "动物圈",
            item: 217,
            sub_default_category_id: 218,
            sub_category: [
              {
                name: "喵星人",
                item: 218,
              },
              {
                name: "汪星人",
                item: 219
              },
              {
                name: "大熊猫",
                item: 220
              },
              {
                name: "野生动物",
                item: 221,
              },
              {
                name: "爬虫",
                item: 222
              },
              {
                name: "动物综合",
                item: 75
              }
            ]
          },
          {
            name: "鬼畜",
            item: 119,
            sub_default_category_id: 22,
            sub_category: [
              {
                name: "鬼畜调教",
                item: 22,
              },
              {
                name: "音MAD",
                item: 26
              },
              {
                name: "人力VOCALOID",
                item: 126
              },
              {
                name: "鬼畜剧场",
                item: 216,
              },
              {
                name: "教程演示",
                item: 127
              }
            ]
          },
          {
            name: "时尚",
            item: 155,
            sub_default_category_id: 22,
            sub_category: [
              {
                name: "美妆",
                item: 157,
              },
              {
                name: "服饰",
                item: 158
              },
              {
                name: "T台",
                item: 159
              },
              {
                name: "风尚标",
                item: 192,
              }
            ]
          },
        ]
      }
    },
  }
</script>

<style>

  @import url(https://s1.hdslb.com/bfs/static/jinkela/mstation-h5/css/mstation.4.fe7e458082ef5af1d663dd1b65f365d1b753903f.css);

  .suspension {
    height: 11.73333vw;
    line-height: 11.73333vw;
  }

  .suspension-navbar {
    padding: 0 3.2vw 0 4.8vw;
    height: 11.73333vw;
    line-height: 11.73333vw;
    display: flex;
    justify-content: space-between;
  }

  /* 左上图标 */
  .logo {
    display: inline-block;
  }

  .logo i {
    color: #fb7299;
    font-size: 7.46667vw;
  }

  .right .search {
    margin-right: 5.86667vw;
    width: 5.86667vw;
    height: 5.86667vw;
    display: inline-block;
    margin-top: 0.53333vw;
    vertical-align: top;
  }

  .right .search i {
    color: #ccc;
    font-size: 5.86667vw;
  }

  .right .user-face {
    width: 6.4vw;
    height: 6.4vw;
    display: inline-block;
    margin-right: 3.2vw;
  }

  .right .user-face .bfs-img {
    width: 6.4vw;
    height: 6.4vw;
  }

  .download-app {
    display: inline-block;
    height: 100%;
  }

  .download-app img {
    width: 19.2vw;
    margin-left: 2.13333vw;
    margin-top: 2.66667vw;
  }

  .channel {
    height: 10.66667vw;
    display: flex;
    border-bottom: 1px #eee solid;
    width: 100%;
    overflow: auto;
  }

  .channel::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }

  .channel-item {
    display: inline-block;
    font-size: 3.73333vw;
    text-decoration: none;
    padding: 0 4.26667vw;
    height: inherit;
    display: inline-block;
    line-height: 269%;
    border-bottom: #fb7299 ;
    flex-shrink: 0;
    color: black;
  }

  .content {
    position: relative;
    top: 22.66667vw;
  }

  .head {
    position: fixed;
    width: 100vw;
    z-index: 1;
    background: white;
  }

</style>