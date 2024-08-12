import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { ModeToggle } from '../ModeToggle';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const UserNavbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isLoggedIn, userRole, logout } = useAuth();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, [isLoggedIn]);

    const NavLinks = [
        { title: 'Home', path: '/' },
        { title: 'Services', path: '/services' },
        { title: 'Locations', path: '/location' }
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

    const handleLogout = () => {
        logout();
        localStorage.removeItem('token'); // Optionally clear token on logout
        localStorage.removeItem('username'); // Clear username on logout
        setUsername(''); // Clear username state on logout
        navigate('/');
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="font-sans sticky top-0 left-0 w-full h-[9vh] flex flex-row justify-center items-center z-10 border-b-2 shadow-md bg-white dark:bg-gray-800 text-foreground dark:text-secondary-foreground">
            <div className="w-1/4 h-full flex justify-start items-center text-purple-900 dark:text-primary-foreground">
                <div className="flex items-center text-2xl">
                    <FaHome className="mr-2" />
                    <span className="font-bold text-xl">DreamDwelling</span>
                </div>
            </div>
            <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8'>
                {isLoggedIn ? (
                    <>
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
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center gap-2 focus:outline-none"
                            >
                                <span className='pl-2 pr-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full'>
                                    {username || 'Loading...'}
                                </span>
                                <svg
                                    className={`w-4 h-4 fill-current transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M5.05 7.05a1 1 0 011.414 0L10 10.586l3.536-3.535a1 1 0 111.414 1.414l-4.243 4.243a1 1 0 01-1.414 0L5.05 8.464a1 1 0 010-1.414z" />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <ul className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
                                    <li className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <NavLink to="/userdashboard">Dashboard</NavLink>
                                    </li>
                                    <li
                                        onClick={handleLogout}
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                    >
                                        Logout
                                    </li>
                                </ul>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <ModeToggle />
                        <li className='list-none'>
                            <NavLink to="/login" className="hover:text-primary dark:hover:text-primary-foreground transition-colors duration-300">
                                Login
                            </NavLink>
                        </li>
                        <li className='list-none'>
                            <NavLink to="/register" className="hover:text-primary dark:hover:text-primary-foreground transition-colors duration-300">
                                Register
                            </NavLink>
                        </li>
                    </>
                )}
            </div>
        </div>
    );
};

export default UserNavbar;
