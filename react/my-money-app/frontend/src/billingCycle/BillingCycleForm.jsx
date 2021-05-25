import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import LabelAndInput from '../common/form/LabelAndInput'
import Button from '../common/button/Button'
import './billingCycle.css'
import { init } from './billingCycleActions'
import ItemList from './ItemList'
import Summary from './Summary'

function BillingCycleForm(props) {
  const { handleSubmit, readOnly, credits, debits } = props

  function calculateSummary() {
    const sum = (t, v) => t + v

    const credits = props.credits.map(c => +c.value || 0)
    const debits = props.debits.map(c => +c.value || 0)

    return {
      sumOfCredits: credits.length === 0 ? 0 : credits.reduce(sum),
      sumOfDebits: debits.length === 0 ? 0 : debits.reduce(sum)
    }
  }

  const { sumOfCredits, sumOfDebits } = calculateSummary()

  return (
    <form onSubmit={ handleSubmit }>
      <div className="fields">
        <Field name="name" component={LabelAndInput} label="Nome" placeholder="Informe o nome" readOnly={readOnly} />
        <Field name="month" component={LabelAndInput} type="number" label="Mês" placeholder="Informe o mês" readOnly={readOnly} />
        <Field name="year" component={LabelAndInput} type="number" label="Ano" placeholder="Informe o ano" readOnly={readOnly} />
      </div>
      <Summary credit={sumOfCredits} debit={sumOfDebits}/>
      <div className="billingCycleItems">
        <ItemList readOnly={readOnly} list={credits} field="credits" caption="Créditos"/>
        <ItemList readOnly={readOnly} list={debits} field="debits" caption="Débitos" showStatus={true} />
      </div>
      <div className="form-footer">
        <Button bg={props.submitColor} type="submit">{props.submitLabel}</Button>
        <Button bg="gray" type="button" onClick={props.init}>Cancelar</Button>
      </div>
    </form>
  )
}

const form = { form: 'billingCycleForm', destroyOnUnmount: false }
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
  credits: selector(state, 'credits'),
  debits: selector(state, 'debits')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(form)(BillingCycleForm))