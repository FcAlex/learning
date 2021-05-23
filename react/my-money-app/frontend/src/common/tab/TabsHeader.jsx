import './tab.css'

const TabsHeader = props => {
  return (
    <ul className="navTabs">
      {props.children}
    </ul>
  )
}

export default TabsHeader