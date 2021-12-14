import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import * as serviceWorker from './serviceWorker'

//@ts-ignore
function render(props) {
  const { container } = props
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container
      ? container.querySelector('#minor-react-root')
      : document.getElementById('#minor-react-root'),
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

export async function bootstrap() {
  console.log('bootstrap')
}

export async function mount(props: any) {
  console.log('react mount')
  storeTest(props)
  render(props)
}

export async function unmount(props: any) {
  const { container } = props

  ReactDOM.unmountComponentAtNode(
    // @ts-ignore
    container
      ? container.querySelector('#minor-react-root')
      : document.querySelector('#minor-react-root'),
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

serviceWorker.unregister()
