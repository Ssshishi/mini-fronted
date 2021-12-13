import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import 'antd/dist/antd.min.css'
import Home from './pages/home'
import About from './pages/about'

const RouteExample = () => {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/minor-react' : '/'}>
      <nav>
        <NavLink to="/" className="app-mian-link" end>
          Home
        </NavLink>
        <NavLink to="/about" className="app-mian-link" end>
          About
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <RouteExample />
    </div>
  )
}

export default App
