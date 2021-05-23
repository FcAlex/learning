import './tab.css'

const Tabs = props => {
  return (
    <div className="tabs">
      {props.children}
    </div>
  )
}

export default Tabs