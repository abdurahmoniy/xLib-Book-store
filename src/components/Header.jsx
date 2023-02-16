import React, { useState } from 'react'
import { navLink } from './consts'
import { styles } from './style'
import logo from './assests/logo.png'

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('home');

  const toggleMenu = () => setToggle(prev => !prev);
  const activeNav = id => setActive(id);

  return (
    <div className="w-full py-1 flex justify-between items-center">
      <div className={`${styles.header}`}>
        <img className=' h-[40px]' src={logo} alt="" />
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
      <div className="hidden md:block">
      <a href='https://contact-pf.netlify.app/' className={`py-3 px-4 font-myfont font-medium 
          text-[16px] bg-myteal text-mylight rounded-[8px] outline-none`}>Sign in</a>
      </div>


      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <i className={`${toggle ? 'fas fa-x fa-2x' : 'fas fa-bars fa-2x'} object-contain text-mylight`} onClick={toggleMenu}></i>
        <div className={`${!toggle ? "hidden" : "flex"} p-6 absolute top-20 right-0 left-0 w-full sidebar bg-mygradient`}>
          <ul className='list-none sm:hidden flex justify-center items-center flex-1'>
            {navLink.map((nav, idx) => (
              <li key={nav.id} className={
                `font-myfont font-normal cursor-pointer text-[16px] text-mylight 
            hover:text-myteal translate-all duration-300
            ${idx === navLink.length - 1 ? 'mr-0' : 'mr-10'}
            ${active === nav.id ? "text-myteal border-b-myteal border-b-2" : "text-mylight"}
          `} onClick={() => activeNav(nav.id)}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
