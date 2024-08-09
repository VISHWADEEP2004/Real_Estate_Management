import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const CarHeader = () => {
  return (
    <header className="py-4 font-sans-font-roboto sticky top-0 left-0 w-full h-[9vh] flex flex-row justify-center items-center z-10 border-b-2 shadow-md bg-white dark:bg-gray-800 text-foreground dark:text-secondary-foreground">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-3xl font-bold">Dream Dwelling</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/joinus" 
                className="flex items-center bg-violet-950 text-white py-2 px-4 rounded-lg hover:bg-violet-700 transition duration-300"
              >
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                Join Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default CarHeader;
