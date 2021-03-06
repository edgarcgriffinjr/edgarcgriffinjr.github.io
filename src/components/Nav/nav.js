import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { sidebarData } from '../static/sidebarData'
import './nav.css'

const Burger = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return ( 
        <>
            <div className = 'navbar'>
                <Link to ='#' className = 'burger'>
                    <FaIcons.FaBars onClick = { showSidebar} />
                </Link>
            </div>
            <nav className= {sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-item" onClick = {showSidebar}>
                    <li className="navbar-toggle">
                        <Link to ='#' className = 'close'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {sidebarData.map((item, index) => {
                        return (
                            <li key = {index} className = {item.cName}>
                                <Link to = {item.path}>
                                    {item.icon}
                                    <span> {item.title} </span>
                                </Link>
                            </li>
                        )
                    })}

                </ul>
            </nav>  
        </>
    );
}
 
export default Burger;