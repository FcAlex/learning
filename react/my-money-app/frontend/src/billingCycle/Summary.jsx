import Content from '../common/template/Content'
import ValueBox from '../common/widget/ValueBox'

const Summary = ({ credit, debit }) => {
  return (
    <div className="summary">
      <h2 className="billingCycleItemTitle">Resumo</h2>

      <Content>
        <ValueBox color="green" icon="bank" value={`R$ ${credit}`} text="Total de Créditos" />
        <ValueBox color="red" icon="credit-card" value={`R$ ${debit}`} text="Total de Débitos" />
        <ValueBox color="blue" icon="money" value={`R$ ${credit - debit}`} text="Valor Consolidado" />
      </Content>
    </div>
  )
}

export default Summary