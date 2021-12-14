import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom'
import './App.css'
import 'antd/dist/antd.min.css'
import Home from './pages/home'
import About from './pages/about'
import LibVersion from './components/lib-version'
import { Divider } from 'antd'
import HelloModal from './components/hello-modal'

const RouteExample = () => {
  return (
    <Router
      basename={(window as any).__POWERED_BY_QIANKUN__ ? '/minor/react' : '/'}
    >
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
      <LibVersion />
      <HelloModal />

      <Divider />
      <RouteExample />
    </div>
  )
}

export default App
