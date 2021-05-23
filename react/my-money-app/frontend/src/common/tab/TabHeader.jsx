import { bindActionCreators } from "redux"
import { connect } from 'react-redux'
import { selectTab } from "./tabsActions"
import If from "../helpers/If"

const TabHeader = props => {
  const selected = props.tab.selected === props.target
  const visible = props.tab.visible[props.target]
  return (
    <If test={visible}>
      <li className={selected ? 'tabActive' : ''}
        data-target={props.target}
        data-toggle='tab'
        onClick={() => props.selectTab(props.target)}>
        <span>
          <i className={`fa fa-${props.icon}`}></i> {props.label}
        </span>
      </li>
    </If>
  )
}

const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)