import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faTree, faLandmark } from '@fortawesome/free-solid-svg-icons';

const locations = [
  { name: 'Chennai', link: '/location/chennai', icon: faCity },
  { name: 'Coimbatore', link: '/location/coimbatore', icon: faCity },
  { name: 'Madurai', link: '/location/madurai', icon: faCity },
  { name: 'Ooty', link: '/location/ooty', icon: faTree },
  { name: 'Trichy', link: '/location/trichy', icon: faLandmark },
  { name: 'Salem', link: '/location/salem', icon: faCity },
  { name: 'Erode', link: '/location/erode', icon: faCity },
  { name: 'Kodaikanal', link: '/location/kodaikanal', icon: faTree },
  { name: 'Tirunelveli', link: '/location/tirunelveli', icon: faCity },
  { name: 'Thanjavur', link: '/location/thanjavur', icon: faLandmark },
  { name: 'Vellore', link: '/location/vellore', icon: faCity },
  { name: 'Yercaud', link: '/location/yercaud', icon: faTree },
  { name: 'Tuticorin', link: '/location/tuticorin', icon: faCity },
  { name: 'Nagercoil', link: '/location/nagercoil', icon: faCity },
  { name: 'Dindigul', link: '/location/dindigul', icon: faCity },
  { name: 'Pollachi', link: '/location/pollachi', icon: faCity },
  { name: 'Kanchipuram', link: '/location/kanchipuram', icon: faLandmark },
  { name: 'Sivakasi', link: '/location/sivakasi', icon: faCity },
  { name: 'Thoothukudi', link: '/location/thoothukudi', icon: faCity },
  { name: 'Mettupalayam', link: '/location/mettupalayam', icon: faCity },
];

const Properties = () => {
  const [search, setSearch] = useState('');

  const filteredList = locations.filter(location =>
    location.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="app" className="flex flex-col items-center justify-center mt-4 mb-4 w-full">
      <div className="relative w-4/5 max-w-xl mb-5">
        <input
          type="text"
          className="w-full p-3 text-gray-700 border border-purple-200 rounded-lg shadow-md bg-white dark:bg-secondary dark:text-secondary-foreground focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for properties..."
        />
      </div>
      <div className="grid grid-cols-1 pr-10 pl-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {filteredList.map((location, index) => (
          <div
            className="shadow-lg  p-4 rounded transform transition-transform hover:scale-105 text-center bg-white dark:bg-gray-800"
            key={index}
          >
            <Link to={location.link} className="p-3 text-xl flex flex-col items-center no-underline">
              <FontAwesomeIcon icon={location.icon} size="4x" className="text-purple-900 mb-6 mt-10" />
              <p className='text-xl'>{location.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;