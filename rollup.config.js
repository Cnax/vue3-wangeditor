import resolve from '@rollup/plugin-node-resolve';
import vue from "rollup-plugin-vue"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import terser from '@rollup/plugin-terser';
import image from "@rollup/plugin-image"
import json from '@rollup/plugin-json';

import pkg from './package.json' assert { type: "json" }

const es = {
  input: 'src/components/index.js',
  output: { // 必须，输出文件 (如果要输出多个，可以是一个数组)
    file: pkg.module,
    name: 'vueWangeditor',
    format: 'es',
    extend: true,
    globals: {
      vue: "Vue" // 告诉rollup全局变量Vue即是vue
    },
    plugins: [terser()]
  },
  external: ['vue'],
  plugins: [ // 引入的插件在这里配置
    json(),
    resolve(),
    vue({
      css: true,
      compileTemplate: true
    }),
    babel({
      exclude: "**/node_modules/**",
      babelHelpers: 'bundled'
    }),
    commonjs(),
    image()
  ]
}

const minEs = {
  input: 'src/components/index.js',
  output: { // 必须，输出文件 (如果要输出多个，可以是一个数组)
    file: pkg.browser,
    name: 'vueWangeditor',
    format: 'umd',
    extend: true,
    globals: {
      vue: "Vue" // 告诉rollup全局变量Vue即是vue
    },
    plugins: [terser()]
  },
  external: ['vue'],
  plugins: [ // 引入的插件在这里配置
    json(),
    resolve(),
    vue({
      css: true,
      compileTemplate: true
    }),
    babel({
      exclude: "**/node_modules/**",
      babelHelpers: 'bundled'
    }),
    commonjs(),
    image()
  ]
}

const cjs = {
  input: 'src/components/index.js',
  output: { // 必须，输出文件 (如果要输出多个，可以是一个数组)
    file: pkg.main,
    name: 'vueWangeditor',
    format: 'cjs',
    exports: 'auto',
    globals: {
      vue: "Vue" // 告诉rollup全局变量Vue即是vue
    },
    plugins: [terser()]
  },
  external: ['vue'],
  plugins: [ // 引入的插件在这里配置
    json(),
    resolve(),
    vue({
      css: true,
      compileTemplate: true
    }),
    babel({
      exclude: "**/node_modules/**",
      babelHelpers: 'bundled'
    }),
    commonjs(),
    image()
  ]
}

export default [minEs, es, cjs]