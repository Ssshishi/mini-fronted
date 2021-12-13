import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

function render(props) {
  const { container } = props
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container
      ? document.getElementById('#minor-react-root')
      : document.getElementById('#minor-react-root'),
  )
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('bootstrap')
}

export async function mount(props) {
  console.log('react mount')
  render(props)
}

export async function unmount(props) {
  const { container } = props

  ReactDOM.unmountComponentAtNode(
    // @ts-ignore
    container
      ? document.querySelector('#minor-react-root')
      : document.querySelector('#minor-react-root'),
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
