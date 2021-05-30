import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { isAuthenticated } from './auth'

const PrivateRoute = ({ component: Component, ...rest }) => {
  function render(props) {
    return (
      isAuthenticated() ? <Component {...rest} /> : <Redirect to={{ pathname: '/', state: { from: props.location} }} />
    )
  }

  return <Route {...rest} render={props => render(props)}/>
}

const Routes = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <h1>Hello World</h1>} />
        <PrivateRoute path="/app" component={() => <h1>Você está logado!</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes