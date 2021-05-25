import { arrayInsert, arrayRemove, Field } from "redux-form"
import Input from "../common/form/Input"
import ButtonIcon from "../common/button/ButtonIcon"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import If from "../common/helpers/If"
import Select from "../common/form/Select"

const ItemList = props => {

  function add(index, item = {}) {
    if (!props.readOnly) {
      console.log("OK")
      props.arrayInsert('billingCycleForm', props.field, index, item)
    }
  }

  function remove(index) {
    if (!props.readOnly && props.list.length > 1) {
      props.arrayRemove('billingCycleForm', props.field, index)
    }
  }

  function renderRows() {
    const list = props.list || []
    return list.map((item, index) => (
      <tr key={index}>
        <td> {/* name: relaciona ao dados pegos do backend (isso foi feito graças ao redux-form) */}
          <Field name={`${props.field}[${index}].name`} component={Input}
            placeholder="informe o nome" readOnly={props.readOnly} />
        </td>
        <td>
          <Field name={`${props.field}[${index}].value`} component={Input}
            placeholder="informe o valor" readOnly={props.readOnly} />
        </td>
        <If test={props.showStatus}>
          <td>
            <Field component={Select} readOnly={props.readOnly} 
              list={['PAGO', 'PENDENTE', 'AGENDADO']} name={`${props.field}[${index}].status`}/>
            {/* <Field  component={Input}
              placeholder="informe o Status" readOnly={props.readOnly} /> */}
          </td>
        </If>
        <td>
          <ButtonIcon icon="plus" bg="green" type="button" onClick={() => add(index + 1)} />
          <ButtonIcon icon="clone" bg="orange" type="button" onClick={() => add(index + 1, item)} />
          <ButtonIcon icon="trash-o" bg="red" type="button" onClick={() => remove(index)} />
        </td>
      </tr>
    ))
  }

  return (
    <table className="table-items">
      <caption className="billingCycleItemTitle">{props.caption}</caption>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Valor</th>
          <If test={props.showStatus}>
            <th>Status</th>
          </If>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)