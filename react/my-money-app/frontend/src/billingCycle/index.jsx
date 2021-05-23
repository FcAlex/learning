import { bindActionCreators } from 'redux'
import ContentHeader from './../common/template/Content/ContentHeader'
import Content from '../common/template/Content'
import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabsContent from '../common/tab/TabsContent'
import TabContent from '../common/tab/TabContent'
import TabHeader from '../common/tab/TabHeader'

import './billingCycle.css'
import { connect } from 'react-redux'
import { selectTab, showTabs } from '../common/tab/tabsActions'
import { useEffect } from 'react'

const BillingCycle = props => {

  const { selectTab, showTabs }  = props

  useEffect(() => {
    selectTab('tabList')
    showTabs('tabList', 'tabCreate')
  }, [selectTab, showTabs])

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
              <h1>Lista</h1>
            </TabContent>
            
            <TabContent id="tabCreate">
              <h1>Incluir</h1>
            </TabContent>
            
            <TabContent id="tabUpdate">
              <h1>Alterar</h1>
            </TabContent>

            <TabContent id="tabDelete">
              <h1>Excluir</h1>
            </TabContent>
          </TabsContent>
        </Tabs>
      </Content>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)