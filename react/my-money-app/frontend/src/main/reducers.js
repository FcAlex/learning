import { combineReducers } from 'redux'
import TabsReducer from '../common/tab/tabsReducer'
import DashboardReducer from '../dashboard/dashboardReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import { reducer as formReducer } from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabsReducer,
  billingCycle: BillingCycleReducer,
  toastr: toastrReducer,
  form: formReducer,
})

export default rootReducer