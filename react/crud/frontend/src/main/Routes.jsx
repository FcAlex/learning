import { Switch, Route, Redirect} from 'react-router'
import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/users" component={UserCrud}></Route>
      <Redirect from="*" to="/"/>
    </Switch>
  )
}

export default Routes