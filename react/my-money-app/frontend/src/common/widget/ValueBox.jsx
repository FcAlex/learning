import './widget.css'

const ValueBox = props => {
  return (
    <div className={`valueBox bg-${props.color}`}>
      <div className="inner">
        <h2>{props.value}</h2>
        <p>{props.text}</p>
      </div>

      <div className="icon">
        <i className={`fa fa-${props.icon}`}></i>
      </div>
    </div>
  )
}

export default ValueBox