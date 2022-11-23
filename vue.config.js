const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup',
    },
    options: {
      template: 'public/browser-extension.html',
      entry: './src/options/main.js',
      title: 'Options',
    },
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        // background: {
        //   entry: 'src/background.js',
        // },
        contentScripts: {
          entries: {
            'content-script': ['src/content-scripts/content-script.js'],
          },
        },
      },
      manifestTransformer: (manifest) => {
        manifest.content_security_policy = {
          extension_pages: "script-src 'self'; object-src 'self';",
        };
        return manifest;
      },
    },
  },
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
};
