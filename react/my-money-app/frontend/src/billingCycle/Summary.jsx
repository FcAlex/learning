import ValueBox from '../common/widget/ValueBox'

const Summary = ({credit, debit}) => {
  return (
    <div>
      <fieldset>
        <legend>Resumo</legend>

        <div>
        <ValueBox color="green" icon="bank" value={`R$ ${credit}`} text="Total de Créditos" />
        <ValueBox color="red" icon="credit-card" value={`R$ ${debit}`} text="Total de Débitos" />
        <ValueBox color="blue" icon="money" value={`R$ ${credit - debit}`} text="Valor Consolidado" />
        </div>
      </fieldset>
    </div>
  )
}

export default Summary