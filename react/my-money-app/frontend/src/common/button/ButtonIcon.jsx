import Button from "./Button"

const ButtonIcon = props => {
  return (
    <Button {...props}>
      <i className={`fa fa-${props.icon}`}></i>
    </Button>
  )
}

export default ButtonIcon