import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = props => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/param/123">
                            Param 1
                        </Link>
                    </li>
                    <li>
                        <Link to="/param/legal">
                            Param 2
                        </Link>
                    </li>
                    <li>
                        <Link to="/naoExiste">
                            Não Existe
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu