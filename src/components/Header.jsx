import React, { useState } from 'react'
import { navLink } from './consts'
import { styles } from './style'
import logo from './assests/logo.png'
import menu from './assests/menu.png'
import {Squash as Hamburger} from 'hamburger-react'
import close from './assests/menu.png'

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('home');

  const toggleMenu = () => setToggle(prev => !prev);
  const activeNav = id => setActive(id);

  return (
    <div className="w-full py-3 flex justify-between items-center">
      <div className={`${styles.header}`}>
        <img className=' h-[50px]' src={logo} alt="" />
      </div>
      <ul className='list-none sm:flex hidden justify-center items-center'>
        {navLink.map((nav, idx) => (
          <li key={nav.id} className={
            `font-myfont font-normal cursor-pointer text-[18px] text-mylight 
            hover:text-myteal translate-all duration-300
            ${idx === navLink.length - 1 ? 'mr-0' : 'mr-10'}
            ${active === nav.id ? "text-myteal border-b-myteal border-b-2" : "text-mylight"}
          `}
            onClick={() => activeNav(nav.id)}
          ><a href={`#${nav.id}`}>{nav.title}</a></li>
        ))}
      </ul>
      <div className="hidden sm:flex">
        <a href='#' className={`py-2 px-4 font-myfont font-medium 
          text-[16px] bg-myteal text-mylight rounded-[8px] outline-none`}>Sign in</a>
      </div>


      <div className='sm:hidden flex flex-1 justify-end items-center py-2'>
        <div className="sm:hidden flex">
          <a href='#' className={`py-2 mx-4 px-4 font-myfont font-medium 
          text-[16px] bg-myteal text-mylight rounded-[8px] outline-none`}>Sign in</a>
        </div>
        <div onClick={toggleMenu} className='text-myteal'>
          <Hamburger/>
        </div>
        {/* <img src={menu} className={`h-[40px] ${toggle ? 'rotate-180 -top-2' : 'rotate-0'}`} onClick={toggleMenu}/> */}
        <div className={`${!toggle ? "hidden" : "block"} justify-end text-right p-6 absolute top-20 right-0 w-[300px] min-h-screen sidebar bg-myblack`}>
          <ul className='list-none sm:hidden block'>
            {navLink.map((nav, idx) => (
              <li key={nav.id} className={
                `w-[250px] my-4 font-myfont font-normal cursor-pointer text-[18px]
            hover:bg-mybg1 hover:text-myblack translate-all duration-300 rounded-lg
            
            ${active === nav.id ? "hover:bg-mybg1 bg-mytext1 text-myblack" : "text-myteal"}
          `} onClick={() => activeNav(nav.id)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
                <i className={` p-5 ${nav.icon}`}></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
