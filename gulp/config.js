// @file config.js
var path = require('path');

var dest = './build'; // 出力先ディレクトリ
var src = './src';  // ソースディレクトリ
var relativeSrcPath = path.relative('.', src);

module.exports = {
    // 出力先の指定
    dest: dest,

    // jsのビルド設定
    js: {
        src: src + '/js/**',
        dest: dest + '/js',
        uglify: true
    },

    // webpackの設定
    webpack: {
        entry: src + '/js/app.js',
        output: {
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['', '.js']
        }
    },

    // stylus
    stylus: {
        src: [
            src + '/styl/**/!(_)*'
        ],
        dest: dest + '/css/',
        output: 'main.css',  // 出力ファイル名
        autoprefixer: {
            browsers: ['last 2 versions']
        },
        minify: true
    },
    
    // copy
    copy: {
        src: [
            src + '/www/**/*.html'
        ],
        dest: dest
    },
    
    // watch
    watch: {
        js: relativeSrcPath + '/js/**',
        styl: relativeSrcPath + '/styl/**',
        www: relativeSrcPath + '/www/**'
    }
};
