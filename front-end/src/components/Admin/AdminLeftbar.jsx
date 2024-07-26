import React from 'react'
import logo2 from '../../assets/img/logo2.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns, faUsers ,faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

const AdminLeftBar = () => {
    const AdminLinks = [
        {
            title: 'Dashboard',
            path: '/admin/dashboard',
            icon: faTableColumns
        },
        {
            title: 'Users',
            path: '/admin/users',
            icon: faUsers
        }
    ]

    return (
        <div className='sticky top-0 left-0  w-1/6 flex justify-center items-center flex-col border rounded-lg shadow-md bg-input text-foreground dark:bg-secondary dark:text-secondary-foreground'>
            <img src={logo2} className='w-56 px-1 pt-6' alt='Logo' />
            <div className='h-5/6 w-full flex flex-col justify-start items-center gap-4 pt-4'>
                {AdminLinks.map((data, index) => (
                    <li key={index} className='list-none w-[90%] text-left px-3 py-4 border-b-4'>
                        <NavLink to={data.path} className='w-[90%] text-left flex justify-start'>
                        <FontAwesomeIcon icon={data.icon} className='p-0 pr-4 size-6 dark:text-purple-800'/>
                            {data.title}
                        </NavLink>
                    </li>
                ))}
            </div>
            <div className='h-1/6 w-full flex flex-col justify-start  pt-10 items-center '>
                <li className='list-none w-[90%] text-left px-3 py-4 flex justify-start border'>
                <FontAwesomeIcon icon={faRightFromBracket} className='size-6 p-0 pr-4 dark:text-red-400'/>Logout
                </li>
            </div>
        </div>
    )
}

export default AdminLeftBar
