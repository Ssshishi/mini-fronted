import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import {
  renderWithQiankun,
  qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper'
import { createRouter, createWebHistory } from 'vue-router'

function setDomain() {
  window.ISNK = document.domain.indexOf('172') > -1 // 如果是172客户的域名,那就拿客户地址,自动判断,这里搞个全局判断标志
  window.ORIGIN =
    process.env.NODE_ENV === 'development'
      ? process.env.VITE_ORIGIN_DEV
      : window.ISNK
      ? process.env.VITE_ORIGIN_PRO
      : process.env.VITE_ORIGIN_PRO_TEST
}
//  设置主域名,但不跟随基座端口变化而变化
setDomain()

let router = null,
  instance = null,
  history = null
function render(props = {}) {
  const { container } = props
  history = createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? '/micro/vue' : '/',
  )

  router = createRouter({
    history,
    routes,
  })

  instance = createApp(App)
  instance.use(router)
  instance.mount(
    container
      ? container.querySelector('#app')
      : document.getElementById('app'),
  )
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log('我在子应用 micro-vue vite中运行')
  }
}

renderWithQiankun({
  mount(props) {
    console.log('vue vite mount')
    render(props)
  },
  bootstrap() {
    console.log('bootstrap')
  },
  unmount(props) {
    console.log('vue vite 被卸载啦')
    instance.unmount()
    instance._container.innerHTML = ''
    history.destroyed()
    router = null
    instance = null
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}
