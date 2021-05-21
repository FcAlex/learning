import { Route, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom'
import About from '../about/About'
import Todo from '../todo/Todo'

const Routes = props => {
    return (
        <HashRouter>
            <Route path="/todo" component={Todo} />
            <Route path="/about" component={About} />
            <Redirect from="*" to="/todo" />
        </HashRouter>
    )
}

export default Routes