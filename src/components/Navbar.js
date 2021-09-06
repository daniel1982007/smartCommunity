import React from 'react'
import {FaRegBell} from 'react-icons/fa'
import {FaQuestionCircle} from 'react-icons/fa'
import {IoExitOutline} from 'react-icons/io5'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <p>欢迎登陆小区管理，用户名</p>
            <div className='navbar-header'>
                <h4>小区名称</h4>
                <FaRegBell />
                <FaQuestionCircle />
                <Link className='logout'>
                    <IoExitOutline />
                    退出
                </Link>
            </div>
        </nav>
    )
}

export default Navbar