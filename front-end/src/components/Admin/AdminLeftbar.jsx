import React from 'react';
import logo2 from '../../assets/img/logo2.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTableColumns, faUsers, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const AdminLeftBar = () => {
    const navigate = useNavigate();

    const AdminLinks = [
        {
            title: 'Dashboard',
            path: '/admindashboard',
            icon: faTableColumns
        },
        {
            title: 'Users',
            path: '/adminusers',
            icon: faUsers
        },
        {
            title: 'Agents',
            path: '/adminagents',
            icon: faUsers
        }
    ];

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className='sticky top-0 left-0 w-1/6 flex justify-center items-center flex-col border rounded-lg shadow-md  bg-white dark:bg-slate-950'>
            <div className="flex items-center text-2xl mt-4">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                <span className="font-bold text-xl">DreamDwelling</span>
            </div>

            <div className='h-5/6 w-full flex flex-col justify-start items-center gap-4 rounded-xl mt-10 '>
                {AdminLinks.map((data, index) => (
                    <li key={index} className='list-none w-[90%] text-left px-3 py-4 border b-4 border-b-gray-300 dark:text-primary-foreground rounded-lg'>
                        <NavLink to={data.path} className='w-[90%] text-left flex justify-start'>
                            <FontAwesomeIcon icon={data.icon} className='p-0 pr-4 size-6' />
                            {data.title}
                        </NavLink>
                    </li>
                ))}
            </div>
            <div className='h-1/6 w-full flex flex-col justify-start pt-10 items-center'>
                <li className='list-none w-[90%] text-left px-3 py-4 flex justify-start border  border-b-gray-300 rounded-lg cursor-pointer' onClick={handleLogout}>
                    <FontAwesomeIcon icon={faRightFromBracket} className='size-6 p-0 pr-4' />Logout
                </li>
            </div>
        </div>
    );
};

export default AdminLeftBar;
