import { useEffect } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import ButtonIcon from "../common/button/ButtonIcon"
import { getList, showUpdate, showDelete } from './billingCycleActions'

const BillingCycleList = props => {

  const { getList } = props

  useEffect(() => {
    getList()
  }, [getList]) 

  function renderRows() {
    const list = props.list || []
    return list.map(bc => (
      <tr key={bc._id} className="list-row">
        <td>{bc.name}</td>
        <td>{bc.month}</td>
        <td>{bc.year}</td>
        <td>
          <ButtonIcon icon="pencil" bg="orange" onClick={() =>props.showUpdate(bc)} />
          <ButtonIcon icon="trash-o" bg="red" onClick={() =>props.showDelete(bc)} />
        </td>
      </tr>
    ))
  }

  return (
    <div className="billingCycleList">
      <table className="table">
        <thead>
          <tr className="list-row">
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
const mapDispatchToProps = dispatch => 
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)