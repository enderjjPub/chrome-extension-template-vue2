<!-- TODO: 改成英文 readme -->
# chrome-extension-template-vue2

Chrome extension scaffolding project is based on Vue 2.0, built based on vue-cli 4.

# Technology Stack

- `Vue2`：https://cn.vuejs.org/v2/guide/
- `manifest V3`：https://developer.chrome.com/docs/extensions/mv3/intro/
- `vue-cli 4+`
- `ant design vue`(version：1.7.8)
- `nodejs` version：>= 12.13.0

## UI Library

The project uses [Ant Design Vue](https://1x.antdv.com/docs/vue/introduce-cn/).

If you have other needs, you can choose other UI libraries to use:

- [Element UI](https://element.eleme.cn/#/zh-CN/component/installation)
- [Ant Design Vue](https://1x.antdv.com/docs/vue/introduce-cn/)
- [iView](http://v4.iviewui.com/docs/introduce)
- [Vuetify](https://vuetifyjs.com/en/getting-started/installation/#vue-cli-install)
- ...

## Develop

Directory Structure：

```
|- public              // Public resources, packaged in the dist root directory
  |- background.js     // The background.js file of the chrome extension
|- src                 // source code
  |- assets/           // Static resources, such as pictures
  |- components/       // common components
  |- content-script/   // content-script of chrome extension
  |- options/          // options page of chrome extension
  |- popup/            // popup page of chrome extension
  |- manifest.json     // manifest file of V3
  |- manifest-v2.json  // manifest file of V2，if you use V2 to develop, you can use this file to replace manifest.json
|- vue.config.js       // vue-cli configuration
```

1. Configure the `manifest.json` file

Configure according to development needs.

2. develop `popup` page

   if you need to develop the `popup` page, you can refer to this step.

   popup page .vue file：`src/popup/App.vue`

   Component or third-party library import in the `index.js` file which in the `src/popup` directory.

3. develop `background.js`

   if you need to develop `background.js`, you can refer to this step.

   Modify the `background.js` file in the `public` directory.

4. Other pages development can refer to step 2

## Package Release

```
npm install
```

### Package of Development Environment

Support automatic re-build and hot reload of chrome extension when file modified.

```
npm run dev
```

the hot reload is implemented by  `vue preset`：[vue-web-extension](https://github.com/Kocal/vue-web-extension) 

### Package of Production Environment

```
npm run build
```

After packaged, a `dist` folder will be generated in the root directory.<br>
The `dist` folder contains the following files:

```
- css/
- js/
- manifest.json
- popup.html
- options.html
- background.js
- ...
```

You can load this `dist` folder in chrome extension.

<br>
For more information, you can refer to the official documentation:

> https://developer.chrome.com/extensions
> https://developer.chrome.com/extensions/samples
