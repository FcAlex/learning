
const MenuItem = props => {
  return (
    <li className="item">
      <a href={props.path}>
        <i className={`fa fa-${props.icon}`}></i> {props.label}
      </a>
    </li>
  )
}

export default MenuItem