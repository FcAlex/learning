import { combineReducers } from 'redux'
import TabsReducer from '../common/tab/tabsReducer'
import DashboardReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabsReducer
})

export default rootReducer