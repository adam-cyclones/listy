require('dotenv').config();

import {
  EnvPlugin,
  Babel7Plugin,
  CSSPlugin,
  FuseBox,
  SassPlugin,
  WebIndexPlugin,
  UglifyESPlugin,
  CopyPlugin
} from "fuse-box";

const prod = false;

const fuse = FuseBox.init({
  sourceMaps: true,
  homeDir: './src',
  useTypescriptCompiler: true,
  output: 'dist/$name.js',
  plugins: [
    Babel7Plugin({
      config: {
        "presets": ["@babel/env"],
        "plugins": [
          "transform-vue-jsx",
          ["@babel/plugin-transform-runtime",
            {
              "regenerator": true
            }
          ]
        ]
      }
    }),
    [
      SassPlugin({
        importer: true
      }),
      CSSPlugin()
    ],
    WebIndexPlugin({
      templateString: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>$title</title>
  ${!prod ? ["<link href='https://fonts.gstatic.com' rel='preconnect' crossorigin>", '<link href="https://fonts.googleapis.com/css?family=Questrial|Raleway&display=swap" rel="stylesheet">'].join('') : ''}
  $css
</head>
<body>
  <div id='app'></div>
  $bundles
</body>
</html>`,
   })
  ]
});

fuse.dev();

// Vendor
fuse
  .bundle("vendor")
  .instructions(" ~ App.tsx") // nothing has changed here
  .watch()
  .plugin(UglifyESPlugin())
  .hmr()

// APP
fuse
  .bundle('app.js')
  .instructions('!> App.tsx')
  .sourceMaps(true)
  .plugin(CopyPlugin({
    files: ['**/*.webp']
  }))
  .plugin(EnvPlugin({
    LAMBDA_GITHUB: process.env.LAMBDA_GITHUB
  }))
  .watch()
  .hmr();

fuse.run();