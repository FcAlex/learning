import Dashboard from './../dashboard/'
import BillingCycle from './../billingCycle/'

import { Route, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom'

const Routes = props => {
  return (
    <HashRouter>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to={{pathname: '/', hash:'#'}} />
    </HashRouter>
  )
}

export default Routes