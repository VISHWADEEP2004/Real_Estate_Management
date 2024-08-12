import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faTableColumns,
    faHouseChimney,
    faHeart,
    faEnvelope,
    faBell,
    faCog,
    faMapLocationDot,
    faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../contexts/AuthContext'; // Import the useAuth hook

const UserLeftBar = () => {
    const { logout } = useAuth(); // Destructure the logout function from useAuth

    const UserLinks = [
        {
            title: 'Dashboard',
            path: '/userdashboard',
            icon: faTableColumns
        },
        // {
        //     title: 'My Properties',
        //     path: '/myproperties',
        //     icon: faHouseChimney
        // },
        {
            title: 'Favourite Listings',
            path: '/userdashboard/favourite',
            icon: faHeart
        },
        {
            title: 'Messages',
            path: '/usermessages',
            icon: faEnvelope
        },
        {
            title: 'Notifications',
            path: '/usernotifications',
            icon: faBell
        },
        {
            title: 'Search Map',
            path: '/searchmap',
            icon: faMapLocationDot
        },
        {
            title: 'Settings',
            path: '/userdashboard/settings',
            icon: faCog
        }
    ];

    return (
        <div className='sticky top-0 left-0 w-1/6 flex justify-center items-center flex-col border rounded-lg shadow-md bg-white dark:bg-slate-950'>
            <div className="flex items-center text-2xl mt-4">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                <span className="font-bold text-xl">DreamDwelling</span>
            </div>
            <div className='h-5/6 w-full flex flex-col justify-start items-center gap-4 pt-4'>
                {UserLinks.map((data, index) => (
                    <li key={index} className='list-none w-[90%] text-left px-3 py-4 border border-b-gray-300 dark:text-primary-foreground rounded-lg'>
                        <NavLink to={data.path} className='w-[90%] text-left flex items-center'>
                            <FontAwesomeIcon icon={data.icon} className='p-1' />
                            <span className='ml-2'>{data.title}</span>
                        </NavLink>
                    </li>
                ))}
            </div>
            <div className='h-1/6 w-full flex flex-col justify-start pt-10 items-center'>
                <li className='list-none w-[90%] text-left px-3 py-4 flex justify-start border border-b-gray-300 rounded-lg cursor-pointer' onClick={logout}>
                    <FontAwesomeIcon icon={faRightFromBracket} className='size-6 p-0 pr-4' />Logout
                </li>
            </div>
        </div>
    );
};

export default UserLeftBar;
