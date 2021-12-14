import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import { resolve } from 'path'
import { loadEnv } from 'vite'
const { name } = require('./package')

// useDevMode 开启时与热更新插件冲突
// 如果在主应用加载子应用vite 必须打开这个，否则vite加载不成功，单独运行没影响
const useDevMode = true

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  let config = {
    plugins: [vue(), qiankun('micro-vue', { useDevMode })],
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3003,
      cors: true,
    },
    output: {
      // 把 子应用 打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
    define: {
      'process.env': env,
    },
  }
  return config
})
