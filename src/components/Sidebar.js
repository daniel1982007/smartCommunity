import React, {useState} from 'react'
import '../App.css'
import {FaBuilding, FaKey, FaParking, FaTools} from 'react-icons/fa'
import {AiFillHome, AiFillSetting, AiOutlineClose} from 'react-icons/ai'
import {IoPerson, IoEnterOutline} from 'react-icons/io5'
import {MdPayment} from 'react-icons/md'
import {SiAdguard} from 'react-icons/si'
import {HiDocumentReport} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import SubMenu from './SubMenu'


const menusData = [
    {id: 1, title: '小区管理', url: 'community', icon: FaBuilding, clicked: false},
    {id: 2, title: '资产管理', url: 'realestate', icon: FaKey, clicked: false},
    {id: 3, title: '业主管理', url: 'owner', icon: IoPerson, clicked: false},
    {id: 4, title: '费用管理', url: 'payment', icon: MdPayment, clicked: false},
    {id: 5, title: '智慧停车', url: 'smartparking', icon: FaParking, clicked: false},
    {id: 6, title: '设备管理', url: 'equipment', icon: FaTools, clicked: false},
    {id: 7, title: '系统管理', url: 'setting', icon: AiFillSetting, clicked: false},
    {id: 8, title: '巡检管理', url: 'guardcheck', icon: SiAdguard, clicked: false},
    {id: 9, title: '报表统计', url: 'statistic', icon: HiDocumentReport, clicked: false}
]
    

const Sidebar = () => {
    const [small, setSmall] = useState(false)
    const [menus, setMenus] = useState(menusData)

    const handleClick = (e) => {
        const id = e.currentTarget.id
        const newMenus = menus.map(menu => {
            if(menu.id === parseInt(id)) {
                menu.clicked = true
                return menu
            } else {
                menu.clicked = false
                return menu
            }    
        })
        setMenus(newMenus)
    }

    const handleHeaderClick = () => {
        setMenus(prev => prev.map(menu => {
            menu.clicked = false
            return menu
        }))
    }

    console.log(menus)

    return (
        <div className={`side-bar ${small ? 'small' : ''}`}>
            <div className='side-bar-header'>
                <div className='flex-end'>
                    <IoEnterOutline className='p-1' size='2em' style={{display: `${small ? 'block' : 'none'}`}} onClick={() => setSmall(prev => !prev)}/>
                    <AiOutlineClose className='p-1' size='2em' style={{display: `${small ? 'none' : 'block'}`}} onClick={() => setSmall(prev => !prev)}/>
                </div>
                <Link to='/' className='flex' onClick={handleHeaderClick}>
                    {/* here you are not access parameter e */}
                    <AiFillHome className='p-1' size='2.5em'/>
                    <h2 className='p-1' style={{display: `${small ? 'none' : 'block'}`}}>小区管理系统</h2>         
                </Link>
            </div> 
            <ul className='menu'>
                {menus.map(menu => {
                    return (
                        <li key={menu.id}>    
                            <Link to={`/${menu.url}`} className={`flex menu-link ${menu.clicked ? 'active' : ''}`} id={menu.id} onClick={handleClick}>
                                <menu.icon className='menu-icon' size='1.5em' />
                                <h3 className='menu-title' style={{display: `${small ? 'none' : 'block'}`}}>{menu.title}</h3>      
                            </Link>
                            <SubMenu menu={menu} small={small}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar