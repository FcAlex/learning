import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field} from 'redux-form'
import LabelAndInput from '../common/form/LabelAndInput'
import './billingCycle.css'
import { init } from './billingCycleActions'

function BillingCycleForm(props) {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <div className="fields">
        <Field name="name" component={LabelAndInput} label="Nome" placeholder="Informe o nome" />
        <Field name="month" component={LabelAndInput} type="number" label="Mês" placeholder="Informe o mês"/>
        <Field name="year" component={LabelAndInput} type="number" label="Ano" placeholder="Informe o ano"/>
      </div>
      <div className="form-footer">
        <button type="submit" className="btn">Submit</button>
        <button type="button" className="btn bg-gray" onClick={props.init}>Cancelar</button>
      </div>
    </form>
  )
}

const form = { form: 'billingCycleForm', destroyOnUnmount: false }
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(reduxForm(form)(BillingCycleForm))