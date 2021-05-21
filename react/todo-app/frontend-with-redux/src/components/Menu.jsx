const Menu = props => {
  return (
    <nav className="navbar">
      <a href="./" className="navbar-title">
        <i className="fa fa-calendar-check-o"></i> TodoApp
      </a>

      <div className="navbar-nav">
        <a className="nav-link" href="#/todo">Tarefas</a>
        <a className="nav-link" href="#/about">Sobre</a>
      </div>
    </nav>
  )
}

export default Menu