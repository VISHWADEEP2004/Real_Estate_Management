import React from 'react'
import { NavLink } from 'react-router-dom'
import { ModeToggle } from '../ModeToggle'

const Navbar = () => {
    const NavLinks=[
        {
            title:'Home',
            path:'/'
        },
        {
            title:'Login',
            path:'/login'
        },
        {
            title:'Register',
            path:'/register'
        },
    ]
  return (
    <div className="absolute top-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center shadow-lg shadow-purple-950">
      <div className="w-1/4 h-full font-bold flex justify-start items-center  text-purple-900">Vishwa PVT_Lmt</div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8'>
        {
            NavLinks.map((links,index)=>(
                <li key={index} className='list-none'>
                    <NavLink to={links.path}>
                        {links.title}
                    </NavLink>
                </li>
            ))
        }
        <ModeToggle/>
        </div>
    </div>
  )
}

export default Navbar