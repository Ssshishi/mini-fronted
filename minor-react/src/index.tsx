import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import * as serviceWorker from './serviceWorker'

function render(props: any) {
  const { container } = props
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container
      ? document.querySelector(container)
      : document.querySelector('#minor-react-root'),
  )
}

function storeTest(props: any) {
  props.onGlobalStateChange(
    (value: Record<string, any>, prev: Record<string, any>) =>
      console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
    true,
  )
  props.setGlobalState({
    ignore: props.name,
    user: {
      name: props.name,
    },
  })
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

/**
 * 修改、导出微应用钩子
 */

// 首次进入初始化
export async function bootstrap(props: any) {
  console.log(props)
  // console.log('bootstrap', props)
}

//  挂载
export async function mount(props: any) {
  // console.log('react mount', props)
  storeTest(props)
  render(props)
}

// 卸载
export async function unmount(props: any) {
  const { container } = props
  console.error(11, container)

  ReactDOM.unmountComponentAtNode(
    // @ts-ignore
    container
      ? container.querySelector('#minor-react-root')
      : document.querySelector('#minor-react-root'),
  )
}

// 性能报告
reportWebVitals()

// 注销
serviceWorker.unregister()
