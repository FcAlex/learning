import { useEffect } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getList, showUpdate } from './billingCycleActions'

const BillingCycleList = props => {

  const { getList, list } = props

  useEffect(() => {
    getList()
  }, [getList, list]) 

  function renderRows() {
    const list = props.list || []
    return list.map(bc => (
      <tr key={bc._id}>
        <td>{bc.name}</td>
        <td>{bc.month}</td>
        <td>{bc.year}</td>
        <td>
          <button className="btn bg-orange" onClick={() => props.showUpdate(bc)}>
            <i className="fa fa-pencil"></i>
          </button>
        </td>
      </tr>
    ))
  }

  return (
    <div className="billingCycleList">
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Mês</th>
            <th>Ano</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)