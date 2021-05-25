import { bindActionCreators } from 'redux'
import ContentHeader from './../common/template/Content/ContentHeader'
import Content from '../common/template/Content'
import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabsContent from '../common/tab/TabsContent'
import TabContent from '../common/tab/TabContent'
import TabHeader from '../common/tab/TabHeader'
import BillingCycleList from './BillingCycleList'
import { create, update, remove, init } from './billingCycleActions'

import './billingCycle.css'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import BillingCycleForm from './BillingCycleForm'

const BillingCycle = props => {

  const { init }  = props

  useEffect(() => {
    init()
  }, [init])

  return (
    <div className="billingCycle">
      <ContentHeader title="Ciclos de Pagamentos" subtitle="Cadastro" />
      <Content>
        <Tabs>
          <TabsHeader>
            <TabHeader label="Listar" icon="bars" target="tabList" />
            <TabHeader label="Incluir" icon="plus" target="tabCreate" />
            <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
            <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
          </TabsHeader>

          <TabsContent>
            <TabContent id="tabList">
              <BillingCycleList />
            </TabContent>
            
            <TabContent id="tabCreate">
              <BillingCycleForm onSubmit={props.create} submitLabel="Incluir" submitColor="green"/>
            </TabContent>
            
            <TabContent id="tabUpdate">
              <BillingCycleForm onSubmit={props.update} submitLabel="Alterar" submitColor="blue"/>
            </TabContent>

            <TabContent id="tabDelete">
              <BillingCycleForm onSubmit={props.remove} readOnly={true} submitLabel="Remover" submitColor="red" />
            </TabContent>
          </TabsContent>
        </Tabs>
      </Content>
    </div>
  )
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({ create, update, remove, init }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)