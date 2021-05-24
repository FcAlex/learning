import { useState } from "react"

const MenuTree = props => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [direction, setDirection] = useState('left')

  function toggleSubMenu() {
    setToggleMenu(!toggleMenu)
    setDirection(direction === 'left' ? 'right': 'left')
  }

  return (
    <li className="item tree">
      <span className="item-title" onClick={toggleSubMenu}>
        <i className={`fa fa-${props.icon}`}></i> 
        <span>{props.label}</span>
        <i className={`fa fa-angle-${direction} iconToggle`}></i>
      </span>

      {toggleMenu ? <ul>{props.children}</ul> : ''}
    </li>    
  )
}

export default MenuTree