const Menu = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a href="./" className="navbar-brand">
                    <i className="fa fa-calendar-check-o"></i> TodoApp
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#/todo">Tarefas</a>
                        <a className="nav-link" href="#/about">Sobre</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Menu

/*
<header className="navbar navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-header">
                    <a href="./" className="navbar-brand">
                        <i className="fa fa-calendar-check-o"></i> TodoApp
                    </a>
                </div>

                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#/todos">Tarefas</a>
                        </li>
                        <li className="nav-item">
                            <a href="#/about">Sobre</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>*/