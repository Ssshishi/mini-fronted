import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import reportWebVitals from '@/utils/reportWebVitals'
import {
  registerMicroApps,
  start,
  // setDefaultMountApp,
  initGlobalState,
  runAfterFirstMounted,
  LoadableApp,
} from 'qiankun'
// import apps from './micro-apps'
import DefaultLayout from './layouts/default'
import { BrowserRouter } from 'react-router-dom'

/**
 * step1 初始化应用
 */

ReactDOM.render(
  <BrowserRouter>
    <DefaultLayout />
  </BrowserRouter>,
  document.getElementById('major-container'),
)

/**
 * 注册子应用
 */
// interface microAppIprops {
//   name: string
//   entry: string
//   activeRule: string
//   container: string
// }
// const microApps: microAppIprops[] = apps.map((app) => ({
//   ...app,
//   // props: {
//   //   routerBase: app.activeRule,
//   //   getGlobalState: () =>
//   //     onGlobalStateChange((state: any) => {
//   //       console.log(state)
//   //     }, true),
//   // },
// }))

registerMicroApps(
  [
    {
      name: 'minor-react',
      entry: '//localhost:3001',
      container: '#minor-container',
      activeRule: '/minor/react', // 与子项目的 router.base一致
    },
    // {
    //   name: 'minor-umi',
    //   entry: '//localhost:3002',
    //   container: '#minor-container',
    //   activeRule: '/minor/umi',
    // },
    // {
    //   name: 'minor-vue',
    //   entry: '//localhost:3003',
    //   container: '#minor-container',
    //   activeRule: '/minor/vue',
    // },
  ],
  {
    beforeLoad: [
      (app: LoadableApp<{}>): Promise<any> => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name)
        return Promise.reject()
      },
    ],
    beforeMount: [
      (app: LoadableApp<{}>): Promise<any> => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
        return Promise.resolve()
      },
    ],
    afterUnmount: [
      (app: LoadableApp<{}>): Promise<any> => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
        return Promise.resolve()
      },
    ],
  },
)

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
})

onGlobalStateChange((value, prev) =>
  console.log('[onGlobalStateChange - master]', value, prev),
)

setGlobalState({
  ignore: 'main',
  user: {
    name: 'main',
  },
})

/**
 * 设置默认进入的子应用
 */
// setDefaultMountApp('')

/**
 * 启动应用
 */
start()

runAfterFirstMounted(() => {
  console.log('[mainApp] fist app mounted')
})

// 性能检测
reportWebVitals()
