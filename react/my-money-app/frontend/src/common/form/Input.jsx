const Input = props => {
  return (
    <div className='form-group'>
      <input {...props.input}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type} />
    </div>
  )
}

export default Input