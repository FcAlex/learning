import './Logo.css'
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Logo = props => {
  return (
    <aside className="logo">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
    </aside>
  )
}

export default Logo