// src/components/Navbar.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { ModeToggle } from '../ModeToggle';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const NavLinks = [
        { title: 'Home', path: '/' },
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

    const handleClick = (event, link) => {
        event.preventDefault();
        if (link.path.startsWith('#')) {
            if (location.pathname === '/') {
                handleScroll(event, link.path.substring(1));
            } else {
                navigate('/');
                setTimeout(() => handleScroll(event, link.path.substring(1)), 100);
            }
        } else {
            navigate(link.path);
        }
    };

    return (
        <div className="font-sans-font-roboto sticky top-0 left-0 w-full h-[9vh] flex flex-row justify-center items-center z-10 border-b-2 shadow-md bg-white dark:bg-gray-800 text-foreground dark:text-secondary-foreground">
            <div className="w-1/4 h-full flex justify-start items-center text-purple-900 dark:text-primary-foreground">
                <div className="flex items-center text-2xl">
                    <FaHome className="mr-2" />
                    <span className="font-bold text-xl">DreamDwelling</span>
                </div>
            </div>
            <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8'>
                {NavLinks.map((link, index) => (
                    <li key={index} className='list-none'>
                        <a
                            href={link.path}
                            onClick={(e) => handleClick(e, link)}
                            className="hover:text-primary dark:hover:text-primary-foreground transition-colors duration-300"
                        >
                            {link.title}
                        </a>
                    </li>
                ))}
                <ModeToggle />
            </div>
        </div>
    );
};

export default Navbar;
