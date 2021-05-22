
const TabHeader = props => {
  return (
    <li>
      {/* eslint-disable-next-line */}
      <a href="javascript:;" data-target={props.target} data-toggle='tab'>
        <i className={`fa fa-${props.icon}`}></i> {props.label}
      </a>
    </li>
  )
}

export default TabHeader