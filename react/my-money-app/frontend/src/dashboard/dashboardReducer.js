const INITIAL_STATE = {summary: {credit: 0, debit: 0}}

const DashboardReducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case "BILLING_SUMMARY_FETCHED":
      return { ...state, summary: action.payload.data }
    default:
      return state
  }
}

export default DashboardReducer

