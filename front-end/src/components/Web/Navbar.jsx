// Navbar.jsx
import React from 'react';
import logo2 from '../../assets/img/logo2.png';
import { ModeToggle } from '../ModeToggle';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
    const NavLinks = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '#about-us' },
        { title: 'Services', path: '#services' },
        { title: 'Destinations', path: '#destinations' },
        { title: 'Search', path: '/search' },
        { title: 'Login', path: '/login' },
        { title: 'Register', path: '/register' },
    ];

    const handleScroll = (event, id) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="font-sans-font-roboto sticky top-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center z-10 border-b-2 shadow-md bg-white dark:bg-gray-800 text-foreground dark:text-secondary-foreground">
            <div className="w-1/4 h-full flex justify-start items-center text-purple-900 dark:text-primary-foreground">
                <div className="flex items-center text-2xl">
                    <FaHome className="mr-2" /> {/* FontAwesome icon */}
                    <span className="font-bold text-xl">DreamDwelling</span>
                </div>
            </div>
            <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8'>
                {NavLinks.map((link, index) => (
                    <li key={index} className='list-none'>
                        {link.path.startsWith('#') ? (
                            <a
                                href={link.path}
                                onClick={(e) => handleScroll(e, link.path.substring(1))}
                                className="hover:text-primary dark:hover:text-primary-foreground transition-colors duration-300"
                            >
                                {link.title}
                            </a>
                        ) : (
                            <NavLink
                                to={link.path}
                                className="hover:text-primary dark:hover:text-primary-foreground transition-colors duration-300"
                            >
                                {link.title}
                            </NavLink>
                        )}
                    </li>
                ))}
                <ModeToggle />
            </div>
        </div>
    );
}

export default Navbar;
