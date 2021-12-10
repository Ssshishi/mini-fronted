import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from '@/app'
import reportWebVitals from '@/utils/reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// 性能检测
reportWebVitals()
