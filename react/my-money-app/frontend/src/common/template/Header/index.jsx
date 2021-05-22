import './header.css'

const Header = props => {
  return (
    <header className="header">

      <div className="title">
        <a href="/#/">
          <i className="fas fa-wallet"></i>
          <b>My</b> Money
        </a>
      </div>

      <nav className="navbar">
        <i className="fa fa-bars"></i>
      </nav>
    </header>
  )
}

export default Header