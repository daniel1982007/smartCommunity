import React from 'react'
import {Link} from 'react-router-dom'

const SubMenu = ({menu, small}) => {
    // style={{display: menu.clicked && !small ? 'block' : 'none'}}

    const ul = <ul className={`${menu.clicked && !small ? 'show-submenu' : 'hide-submenu'}`}>
                <li><Link to='#'><h5>子项一</h5></Link></li>
                <li><Link to='#'><h5>子项二</h5></Link></li>
                <li><Link to='#'><h5>子项三</h5></Link></li>
                <li><Link to='#'><h5>子项四</h5></Link></li>
                <li><Link to='#'><h5>子项五</h5></Link></li>
            </ul>
    const ul_side = <ul className='ul_side'>
                        <li>123</li>
                        <li>456</li>
                    </ul>

    // menu.clicked && !small ? <>{ul}</> : <>{ul_side}</>
    if(small) {
        return <>{ul_side}</>
    } 
    if(menu.clicked && !small) {
        return <>{ul}</>
    }
    if(!menu.clicked) {
        return <>{ul}</>
    }
    
     
}

export default SubMenu