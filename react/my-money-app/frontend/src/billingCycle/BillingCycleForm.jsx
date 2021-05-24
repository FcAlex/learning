import { reduxForm, Field} from 'redux-form'
import LabelAndInput from '../common/form/LabelAndInput'
import './billingCycle.css'

const BillingCycleForm = props => {
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
      </div>
    </form>
  )
}

export default reduxForm({ form: 'billingCycleForm'})(BillingCycleForm)