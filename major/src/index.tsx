import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import reportWebVitals from '@/utils/reportWebVitals'
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
import { BrowserRouter } from 'react-router-dom'

interface Iprops {
  loading: boolean
}
function render(props: Iprops) {
  const container = document.getElementById('major-container')
  console.error(1111, container)

  ReactDOM.render(
    <BrowserRouter>
      <DefaultLayout loading={props.loading} />
    </BrowserRouter>,
    container,
  )
}

// 初始化应用
render({ loading: true })

const loader = (loading: boolean) => render({ loading })

/**
 * 注册子应用
 */
interface microAppIprops {
  name: string
  entry: string
  activeRule: string
  container: string
  loader: (loading: boolean) => void
}
const microApps: microAppIprops[] = apps.map((app) => ({
  ...app,
  loader,
  // props: {
  //   routerBase: app.activeRule,
  //   getGlobalState: () =>
  //     onGlobalStateChange((state: any) => {
  //       console.log(state)
  //     }, true),
  // },
}))

registerMicroApps(microApps, {
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
})

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
setDefaultMountApp('/minor-react')

/**
 * 启动应用
 */
start()

runAfterFirstMounted(() => {
  console.log('[mainApp] fist app mounted')
})

// 性能检测
reportWebVitals()
