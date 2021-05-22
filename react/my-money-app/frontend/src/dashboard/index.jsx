import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentHeader from './../common/template/Content/ContentHeader'
import Content from './../common/template/Content/'
import ValueBox from './../common/widget/ValueBox'

import { getSummary } from './dashboardActions'
import { useEffect } from 'react'

import './dashboard.css'

const Dashboard = props => {

  const { getSummary } = props

  useEffect(() => getSummary(), [getSummary])

  const { credit, debit } = props.summary
  return (
    <div className="dashboard">
      <ContentHeader title="Dashboard" subtitle="Versão 0.2"/>
      <Content>
        <ValueBox color="green" icon="bank" value={`R$ ${credit}`} text="Total de Créditos" />
        <ValueBox color="red" icon="credit-card" value={`R$ ${debit}`} text="Total de Débitos" />
        <ValueBox color="blue" icon="money" value={`R$ ${credit - debit}`} text="Valor Consolidado" />
      </Content>
    </div>
  )
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)