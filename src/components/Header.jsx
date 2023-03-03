import React, { useState } from 'react'
import { navLink } from './consts'
import { styles } from './style'
import logo from './assests/logo.png'
import { Squash as Hamburger } from 'hamburger-react'
import { Link, NavLink } from 'react-router-dom'



export default function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => setToggle(prev => !prev);

  const actL = 'py-2 border border-mytext1 flex justify-between my-4 font-myfont font-normal cursor-pointer text-[18px] hover:bg-mybg1 hover:text-myblack translate-all duration-300 rounded-lg'

  return (
    <div className={`${styles.padX} w-full py-3 flex justify-between items-center bg-myblack`}>
      <div className={`${styles.header}`}>
        <img className='h-[50px]' src={logo} alt="" />
      </div>
      <ul className='list-none sm:flex hidden justify-center items-center'>
        {navLink.map((nav, idx) => (
          <NavLink 
          key={idx}
          to={nav.path}
          className={({isActive}) => (isActive ? 'text-myteal border-b-myteal border-b-2 mx-auto text-center' : 'text-mylight border-b-2 border-b-transparent text-center')}
          >
            <div className={`mx-4 translate-all py-1 flex justify-between font-myfont font-normal cursor-pointer text-[18px] hover:text-mybg1 duration-300`}>{nav.title}</div>
          </NavLink>
          // <Link to={nav.path} key={idx} 
          //       className={`
          //       ${active === nav.path ? 'text-myteal border-b-2 border-myteal ' : 'text-mylight'} 
          //       translate-all duration-300 mr-5 py-1 flex justify-between ${!toggle ? 'w-full' : 'w-[270px]'}
          //       font-myfont font-normal cursor-pointer text-[18px] hover:text-mybg1 translate-all duration-300`}>
          //   <li >
          //     <div className={`px-2`}>{nav.title}</div>
          //   </li>
          // </Link>
        ))}
      </ul>
      <div className="hidden sm:flex">
        <Link to='/' className={`py-2 px-4 font-myfont font-medium 
          text-[16px] bg-myteal text-mylight rounded-[8px] outline-none`}>Sign in</Link>
      </div>


      <div className='sm:hidden flex flex-1 justify-end items-center py-2 z-10'>
        <div className="sm:hidden flex">
          <Link to='/' className={`py-2 px-4 font-myfont font-medium 
          text-[16px] bg-myteal text-mylight rounded-[8px] outline-none`}>Sign in</Link>
        </div>
        <div onClick={toggleMenu} className='text-myteal '>
          <Hamburger />
        </div>
        <div className={`${!toggle ? "hidden" : "block"} mmenu border-l-2 border-l-mytext1 rounded-l-xl justify-end text-right py-6 px-2 absolute top-[5.5rem] right-0 w-[300px] min-h-[91.8vh] bg-myteal`}>
          <ul className='list-none sm:hidden block'>
            {navLink.map((nav, idx) => (
              <NavLink 
              key={idx}
              to={nav.path}
              className={({isActive}) => (isActive ? ` bg-mytext1 ${actL}` : `${actL}`)}
              >
                <div className={`px-2 translate-all mr-5 py-1 flex justify-between font-myfont font-normal cursor-pointer text-[18px] hover:text-mybg1 translate-all duration-300`}>{nav.title}</div>
              </NavLink>
              // <div key={idx} className={`${active === nav.id ? ' bg-mytext1' : ''} py-2 border border-mytext1 flex justify-between ${!toggle ? 'w-full' : 'w-[270px]'} my-4 font-myfont font-normal cursor-pointer text-[18px]
              // hover:bg-mybg1 hover:text-myblack translate-all duration-300 rounded-lg`}
              // >
              //   <i className={`px-3 py-1 ${nav.icon}`}></i>
              //   <li >
              //     <div className={`px-2 ${!toggle ? 'hidden' : ''}`}>{nav.title}</div>
              //   </li>
              // </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
