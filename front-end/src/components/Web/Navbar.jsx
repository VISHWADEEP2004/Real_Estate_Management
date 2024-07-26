import React from 'react';
import logo2 from '../../assets/img/logo2.png'
import { NavLink } from 'react-router-dom';
import { ModeToggle } from '../ModeToggle';

const Navbar = () => {
    const NavLinks = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Login',
            path: '/login'
        },
        {
            title: 'Register',
            path: '/register'
        },
    ];
    return (
        <div className="font-sans-font-roboto sticky top-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center z-10 border-b-2 shadow-md bg-white dark:bg-gray-800 text-foreground  dark:text-secondary-foreground z-10">
            <div className="w-1/4 h-full flex justify-start items-center text-purple-900 dark:text-primary-foreground">
                <img src={logo2} className='w-48' ></img>
            </div>
            <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8'>
                {
                    NavLinks.map((links, index) => (
                        <li key={index} className='list-none'>
                            <NavLink
                                to={links.path}
                            >
                                {links.title}
                            </NavLink>
                        </li>
                    ))
                }
                <ModeToggle />
            </div>
        </div>
    );
}

export default Navbar;
