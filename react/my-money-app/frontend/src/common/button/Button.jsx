const Button = props => {
  return (
    <button {...props} 
      className={`btn ${props.bg ? `bg-${props.bg}` : ''}`} 
      onClick={props.onClick}>
        
      {props.children}
    </button>
  )
}

export default Button