import MenuItem from './MenuItem'
import MenuTree from './MenuTree'
import './menu.css'

const Menu = props => {
  return (
    <ul>
      <MenuItem path="#" label="Dashboard" icon="dashboard" />
      <MenuTree icon="edit" label="Cadastro">
        <MenuItem path="#billingCycles" label="Ciclos de Pagamentos" icon="usd" />
      </MenuTree>
    </ul>
  )
}

export default Menu