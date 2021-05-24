import './form.css'

const LabelAndInput = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label> 
      <input 
        {...props.input}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type} />
    </div>
  )
}

export default LabelAndInput