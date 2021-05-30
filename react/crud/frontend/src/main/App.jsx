import Footer from '../components/templates/Footer'
import Nav from '../components/templates/Nav'
import Logo from '../components/templates/Logo'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'


const App = props => {
  return (
    <HashRouter>
      <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App