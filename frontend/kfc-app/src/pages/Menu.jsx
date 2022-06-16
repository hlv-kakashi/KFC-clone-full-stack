import React from 'react'
import { MenuItem } from '../menu_components/MenuItems'
import { Sidebar } from '../menu_components/Sidebar'
import styles from "./Menu.module.css"


const Menu = () => {
  return (
    <div className={styles.menumain} >
        <Sidebar/>
        <MenuItem/>
    </div>
  )
}

export default Menu