import React from 'react'
import logo2 from '../../assets/img/logo2.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns, faUsers } from '@fortawesome/free-solid-svg-icons';

const UserLeftBar = () => {
    const UserLinks = [
        {
            title: 'Dashboard',
            path: '/user/dashboard',
            icon: faTableColumns
        },
        {
            title: 'Users',
            path: '/user/userdetails',
            icon: faUsers
        }
    ]

    return (
        <div className='sticky top-0 left-0  w-1/6 flex justify-center items-center flex-col border rounded-lg shadow-md bg-input text-foreground dark:bg-secondary dark:text-secondary-foreground'>
            <img src={logo2} className='w-56 px-1 pt-6' alt='Logo' />
            <div className='h-5/6 w-full flex flex-col justify-start items-center gap-4 pt-4'>
                {UserLinks.map((data, index) => (
                    <li key={index} className='list-none w-[90%] text-left px-3 py-4 border-b-4'>
                        <NavLink to={data.path} className='w-[90%] text-left flex justify-center'>
                        <FontAwesomeIcon icon={data.icon} className='p-1'/>
                        {data.title}
                        </NavLink>
                    </li>
                ))}
            </div>
            <div className='h-1/6 w-full flex flex-col justify-start  pt-10 items-center '>
                <li className='list-none w-[90%] text-left px-3 py-4 flex justify-center border'>
                <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />Logout
                </li>
            </div>
        </div>
    )
}

export default UserLeftBar
