<!-- TODO: 改成英文 readme -->
# chrome-extension-vue-template

`Chrome` 插件基于 `Vue 2.0` 的脚手架项目，`pull` 下来就能直接开发（面向熟悉使用 `Vue` 的开发人员）

项目基于 `vue-cli` 进行构建。

# 技术栈

- `Vue2`：https://cn.vuejs.org/v2/guide/
- `manifest V3`：https://developer.chrome.com/docs/extensions/mv3/intro/
- `vue-cli 4+`
- `ant design vue`(版本：1.7.8)（组件库）
- `nodejs` 版本：>= 12.13.0

## 组件库

项目使用 [Ant Design Vue](https://1x.antdv.com/docs/vue/introduce-cn/) 组件库。

有其他需求的可自行选择其他组件库使用：

- [Element UI](https://element.eleme.cn/#/zh-CN/component/installation)
- [Ant Design Vue](https://1x.antdv.com/docs/vue/introduce-cn/)
- [iView](http://v4.iviewui.com/docs/introduce)
- [Vuetify](https://vuetifyjs.com/en/getting-started/installation/#vue-cli-install)
- ...

## 开发

目录结构：

```
|- public              // 公共资源，打包后在 dist 根目录下
  |- background.js     // chrome 插件的 background.js 文件（因为 V3 版本必须放在打包后的根目录，所以放在这里，可以根据自己需要调整）
|- src                 // 开发代码相关
  |- assets/           // 静态资源相关，比如图片
  |- components/       // 公共组件
  |- content-script/   // chrome 插件的 content-script.js 文件
  |- options/          // chrome 插件的 options 页面
  |- popup/            // chrome 插件的 popup 页面
  |- manifest.json     // chrome 插件配置清单文件（V3）
  |- manifest-v2.json  // chrome 插件配置清单文件（V2），使用 V2 版本开发的，可以用这个文件替换 manifest.json
|- vue.config.js       // vue-cli 配置相关
```

1. 配置 `manifest.json` 文件

根据开发需要配置相关的配置项即可。

2. 编写 `popup` 页面

   有 `popup` 页面开发需求的可以参考这一步。

   页面开发：`src/popup/App` 目录下的 `App.vue` 文件

   组件或者第三方库引入：在 `src/popup` 目录下的 `index.js` 文件中引入

3. 编写 `background`

   有 `background` 开发需求的可以参考这一步。

   修改 `public` 目录下的 `background.js` 文件

4. 其他页面开发可参考步骤 2

## 打包发布

```
npm install
```

### 开发环境打包

支持文件修改后自动重新 `build` 和 `chrome` 插件的热更新

```
npm run dev
```

热更新功能通过  `vue preset`：[vue-web-extension](https://github.com/Kocal/vue-web-extension) 实现。

### 生产环境打包

```
npm run build
```

开发环境和生产环境打包后，都会在根目录下生成一个 `dist` 文件夹，`dist` 文件夹包含以下文件：

```
- css/
- js/
- manifest.json
- popup.html
- options.html
- background.js
- ...
```

`chrome` 扩展加载这个 `dist` 文件夹即可

> 关于 `Chrome` 插件开发相关的知识，可以参考：[`Chrome` 插件开发](https://confluence.inner.youdao.com/pages/viewpage.action?pageId=192536683)
