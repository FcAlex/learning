const Input = props => {
  return (
    <input {...props.input} 
      className=''
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      type={props.type}/>

  )
}

export default Input