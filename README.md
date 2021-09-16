这是一个仿 b 站的网页 ，点此可以查看效果哟 。👉 [点击此处](http://124.71.21.146:8080/)

本次模仿 b 站移动端网页的目的是对目前学习的 Vue 知识进行运用，以及用 Vue-Cli 进行模块化开发。项目的部分预览效果如下。

![image-20210915104706151](https://www.bestguo.top/journal/imitate-bilibili/image-20210915104706151.png)

## 知道了什么？

使用 Vue 这种框架，能够像后端一样分功能。就好比，后端需要实现“学生管理模块”，这个模块的代码写到一个文件中；前端也是如此，每一个模块的界面代码也是保存在文件中。以下是前后端两种项目的对比方式

这是后端的项目结构

![image-20210915111221924](https://www.bestguo.top/journal/imitate-bilibili/image-20210915111221924.png)

这是使用 Vue 的项目结构

![image-20210915110538346](https://www.bestguo.top/journal/imitate-bilibili/image-20210915110538346.png)

## 与 jQuery 的比较

相对于使用原生 JavaScript 和 jQuery，真的是方便太多太多了。jQuery 虽然它的目标是写的更少，做的更多；如果项目规模非常大的话，用 jQuery 就会杂乱无章，后面修改或维护起来也较麻烦。我还记得暑假的时候写了一个基于 WebSocket 的 Web 在线聊天系统，用 jQuery 去渲染 html 的代码就会显得特别的臃肿。

虽然在国内来看用 jQuery 的项目在渐渐减少，但是这也并不意味着 jQuery 就没必要学习。因为在某些公司用的还是 jQuery 。

没有最好的技术，只有最合适的技术。

## 想当然的跨域

> 我原本以为在生产环境的 Vue 项目也会自动跨域，然而并不是，我想太多。🤥🤥

什么是跨域？跨域就是从当前网站发送一个请求，来访问另一个网站上的请求。比如这个仿 b 站的页面，它当前的域是 `124.71.21.146:8080` ，然后这些页面数据是从另一个域 `api.bilibili.com` 下来获取的。于是，跨域就产生了。

![img](https://www.bestguo.top/journal/imitate-bilibili/cross-domain1.jpg)

当我尝试以生产环境的方式部署到 Vercel 时候，出现了跨因域的问题而报错。也就是说，在响应头中 `Access-Control-Allow-Origin` 中，仅有在当前的 `api.bilibili.com` 下的域名才能够访问。

那为什么我的就可以？

因为我现在运行的模式是开发模式，开发模式会启动一台代理服务器，代理是由 Node.js 开启的，所以我是通过代理的方式来解决跨域的。

![img](https://www.bestguo.top/journal/imitate-bilibili/2F25278837-1313a0937d77524e.png)

代理的过程类似于上图，只是中间的代理过程是由 Node.js 来处理的。