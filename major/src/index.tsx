import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import reportWebVitals from '@/utils/reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import {
  registerMicroApps,
  start,
  setDefaultMountApp,
  initGlobalState,
  runAfterFirstMounted,
  LoadableApp,
} from 'qiankun'
import apps from './micro-apps'
import DefaultLayout from './layouts/default'

function render(loading: boolean) {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <DefaultLayout loading={loading} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('major-root'),
  )
}

// 初始化应用
render(true)

const loader = (loading: boolean) => render(loading)

/**
 * 注册子应用
 */
const microApps = apps.map((app) => ({
  ...app,
  loader,
  props: {
    routerBase: app.activeRule,
    getGlobalState: () =>
      onGlobalStateChange((state) => {
        console.log(state)
      }, true),
  },
}))

registerMicroApps(microApps, {
  beforeLoad: [
    (
      app: LoadableApp<{
        routerBase: string
        getGlobalState: () => void
      }>,
    ): Promise<any> => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name)
      return Promise.reject()
    },
  ],
  beforeMount: [
    (
      app: LoadableApp<{
        routerBase: string
        getGlobalState: () => void
      }>,
    ): Promise<any> => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
      return Promise.resolve()
    },
  ],
  afterUnmount: [
    (
      app: LoadableApp<{
        routerBase: string
        getGlobalState: () => void
      }>,
    ): Promise<any> => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
      return Promise.resolve()
    },
  ],
})

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'Cishy',
})

onGlobalStateChange((value, prev) =>
  console.log('[onGlobalStateChange - master]', value, prev),
)

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
})

/**
 * 设置默认进入的子应用
 */
setDefaultMountApp('/minor-umi')

/**
 * 启动应用
 */
start()

runAfterFirstMounted(() => {
  console.log('[mainApp] fist app mounted')
})

// 性能检测
reportWebVitals()
