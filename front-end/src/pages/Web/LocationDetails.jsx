// import { ModeToggle } from '@/components/ModeToggle';
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// const LocationDetails = () => {
//   const { locationName } = useParams();
//   const [propertyType, setPropertyType] = useState('All');

//   const properties = [
//     { type: 'House', name: 'Beautiful House 1', price: '$200,000', image: 'path/to/house1.jpg' },
//     { type: 'House', name: 'Beautiful House 2', price: '$210,000', image: 'path/to/house2.jpg' },
//     { type: 'House', name: 'Beautiful House 3', price: '$220,000', image: 'path/to/house3.jpg' },
//     { type: 'House', name: 'Beautiful House 4', price: '$230,000', image: 'path/to/house4.jpg' },
//     { type: 'House', name: 'Beautiful House 5', price: '$240,000', image: 'path/to/house5.jpg' },
//     { type: 'House', name: 'Beautiful House 6', price: '$250,000', image: 'path/to/house6.jpg' },
//     { type: 'House', name: 'Beautiful House 7', price: '$260,000', image: 'path/to/house7.jpg' },
//     { type: 'House', name: 'Beautiful House 8', price: '$270,000', image: 'path/to/house8.jpg' },
//     { type: 'House', name: 'Beautiful House 9', price: '$280,000', image: 'path/to/house9.jpg' },
//     { type: 'House', name: 'Beautiful House 10', price: '$290,000', image: 'path/to/house10.jpg' },
//     { type: 'Apartment', name: 'Luxury Apartment 1', price: '$150,000', image: 'path/to/apartment1.jpg' },
//     { type: 'Apartment', name: 'Luxury Apartment 2', price: '$160,000', image: 'path/to/apartment2.jpg' },
//     { type: 'Apartment', name: 'Luxury Apartment 3', price: '$170,000', image: 'path/to/apartment3.jpg' },
//     { type: 'Apartment', name: 'Luxury Apartment 4', price: '$180,000', image: 'path/to/apartment4.jpg' },
//     { type: 'Apartment', name: 'Luxury Apartment 5', price: '$190,000', image: 'path/to/apartment5.jpg' },
//     { type: 'Apartment', name: 'Luxury Apartment 6', price: '$200,000', image: 'path/to/apartment6.jpg' },
//     { type: 'Apartment', name: 'Luxury Apartment 7', price: '$210,000', image: 'path/to/apartment7.jpg' },
//     { type: 'Apartment', name: 'Luxury Apartment 8', price: '$220,000', image: 'path/to/apartment8.jpg' },
//     { type: 'Apartment', name: 'Luxury Apartment 9', price: '$230,000', image: 'path/to/apartment9.jpg' },
//     { type: 'Apartment', name: 'Luxury Apartment 10', price: '$240,000', image: 'path/to/apartment10.jpg' },
//     { type: 'Plot', name: 'Spacious Plot 1', price: '$100,000', image: 'path/to/plot1.jpg' },
//     { type: 'Plot', name: 'Spacious Plot 2', price: '$110,000', image: 'path/to/plot2.jpg' },
//     { type: 'Plot', name: 'Spacious Plot 3', price: '$120,000', image: 'path/to/plot3.jpg' },
//     { type: 'Plot', name: 'Spacious Plot 4', price: '$130,000', image: 'path/to/plot4.jpg' },
//     { type: 'Plot', name: 'Spacious Plot 5', price: '$140,000', image: 'path/to/plot5.jpg' },
//     { type: 'Plot', name: 'Spacious Plot 6', price: '$150,000', image: 'path/to/plot6.jpg' },
//     { type: 'Plot', name: 'Spacious Plot 7', price: '$160,000', image: 'path/to/plot7.jpg' },
//     { type: 'Plot', name: 'Spacious Plot 8', price: '$170,000', image: 'path/to/plot8.jpg' },
//     { type: 'Plot', name: 'Spacious Plot 9', price: '$180,000', image: 'path/to/plot9.jpg' },
//     { type: 'Plot', name: 'Spacious Plot 10', price: '$190,000', image: 'path/to/plot10.jpg' },
//     { type: 'Villa', name: 'Modern Villa 1', price: '$300,000', image: 'path/to/villa1.jpg' },
//     { type: 'Villa', name: 'Modern Villa 2', price: '$310,000', image: 'path/to/villa2.jpg' },
//     { type: 'Villa', name: 'Modern Villa 3', price: '$320,000', image: 'path/to/villa3.jpg' },
//     { type: 'Villa', name: 'Modern Villa 4', price: '$330,000', image: 'path/to/villa4.jpg' },
//     { type: 'Villa', name: 'Modern Villa 5', price: '$340,000', image: 'path/to/villa5.jpg' },
//     { type: 'Villa', name: 'Modern Villa 6', price: '$350,000', image: 'path/to/villa6.jpg' },
//     { type: 'Villa', name: 'Modern Villa 7', price: '$360,000', image: 'path/to/villa7.jpg' },
//     { type: 'Villa', name: 'Modern Villa 8', price: '$370,000', image: 'path/to/villa8.jpg' },
//     { type: 'Villa', name: 'Modern Villa 9', price: '$380,000', image: 'path/to/villa9.jpg' },
//     { type: 'Villa', name: 'Modern Villa 10', price: '$390,000', image: 'path/to/villa10.jpg' }
//   ];

//   const filteredProperties = properties.filter(property =>
//     propertyType === 'All' || property.type === propertyType
//   );

//   return (
//     <div className="p-6 w-full mx-auto">
//       <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">Properties in {locationName}</h1>
//       <div className="text-center mb-6">
//         <select 
//           value={propertyType} 
//           onChange={(e) => setPropertyType(e.target.value)}
//           className="p-2 text-lg border w-3/6 border-green-200 rounded text-gray-800 bg-white dark:bg-gray-800 dark:text-gray-100"
//         >
//           <option value="All">All</option>
//           <option value="House">House</option>
//           <option value="Apartment">Apartment</option>
//           <option value="Plot">Plot</option>
//           <option value="Villa">Villa</option>
//         </select>
//       </div>
//       <div className="grid grid-cols-1 pr-10 pl-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProperties.map((property, index) => (
//           <div 
//             key={index} 
//             className="shadow-lg w-full p-4 rounded transform transition-transform hover:scale-105 text-center bg-white dark:bg-gray-800"
//           >
//             <img src={property.image} alt={property.name} className="w-full h-40 object-cover rounded mb-4"/>
//             <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{property.type}</h2>
//             <p className="text-gray-600 dark:text-gray-400 mb-1">{property.name}</p>
//             <p className="text-gray-600 dark:text-gray-400">{property.price}</p>
//           </div>
//         ))}
//       </div>
//       <ModeToggle />
//     </div>
//   );
// };

// export default LocationDetails;




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faMapMarkedAlt, faHotel } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const LocationDetails = () => {
  const { locationName } = useParams();
  const [propertyType, setPropertyType] = useState('All');

  const properties = [
    { type: 'House', name: 'Beautiful House 1', price: '$200,000' },
    { type: 'House', name: 'Beautiful House 2', price: '$210,000' },
    { type: 'House', name: 'Beautiful House 3', price: '$220,000' },
    { type: 'House', name: 'Beautiful House 4', price: '$230,000' },
    { type: 'House', name: 'Beautiful House 5', price: '$240,000' },
    { type: 'House', name: 'Beautiful House 6', price: '$250,000' },
    { type: 'House', name: 'Beautiful House 7', price: '$260,000' },
    { type: 'House', name: 'Beautiful House 8', price: '$270,000' },
    { type: 'House', name: 'Beautiful House 9', price: '$280,000' },
    { type: 'House', name: 'Beautiful House 10', price: '$290,000' },
    { type: 'Apartment', name: 'Luxury Apartment 1', price: '$150,000' },
    { type: 'Apartment', name: 'Luxury Apartment 2', price: '$160,000' },
    { type: 'Apartment', name: 'Luxury Apartment 3', price: '$170,000' },
    { type: 'Apartment', name: 'Luxury Apartment 4', price: '$180,000' },
    { type: 'Apartment', name: 'Luxury Apartment 5', price: '$190,000' },
    { type: 'Apartment', name: 'Luxury Apartment 6', price: '$200,000' },
    { type: 'Apartment', name: 'Luxury Apartment 7', price: '$210,000' },
    { type: 'Apartment', name: 'Luxury Apartment 8', price: '$220,000' },
    { type: 'Apartment', name: 'Luxury Apartment 9', price: '$230,000' },
    { type: 'Apartment', name: 'Luxury Apartment 10', price: '$240,000' },
    { type: 'Plot', name: 'Spacious Plot 1', price: '$100,000' },
    { type: 'Plot', name: 'Spacious Plot 2', price: '$110,000' },
    { type: 'Plot', name: 'Spacious Plot 3', price: '$120,000' },
    { type: 'Plot', name: 'Spacious Plot 4', price: '$130,000' },
    { type: 'Plot', name: 'Spacious Plot 5', price: '$140,000' },
    { type: 'Plot', name: 'Spacious Plot 6', price: '$150,000' },
    { type: 'Plot', name: 'Spacious Plot 7', price: '$160,000' },
    { type: 'Plot', name: 'Spacious Plot 8', price: '$170,000' },
    { type: 'Plot', name: 'Spacious Plot 9', price: '$180,000' },
    { type: 'Plot', name: 'Spacious Plot 10', price: '$190,000' },
    { type: 'Villa', name: 'Modern Villa 1', price: '$300,000' },
    { type: 'Villa', name: 'Modern Villa 2', price: '$310,000' },
    { type: 'Villa', name: 'Modern Villa 3', price: '$320,000' },
    { type: 'Villa', name: 'Modern Villa 4', price: '$330,000' },
    { type: 'Villa', name: 'Modern Villa 5', price: '$340,000' },
    { type: 'Villa', name: 'Modern Villa 6', price: '$350,000' },
    { type: 'Villa', name: 'Modern Villa 7', price: '$360,000' },
    { type: 'Villa', name: 'Modern Villa 8', price: '$370,000' },
    { type: 'Villa', name: 'Modern Villa 9', price: '$380,000' },
    { type: 'Villa', name: 'Modern Villa 10', price: '$390,000' }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'House':
        return faHome;
      case 'Apartment':
        return faBuilding;
      case 'Plot':
        return faMapMarkedAlt;
      case 'Villa':
        return faHotel;
      default:
        return faHome;
    }
  };

  const filteredProperties = properties.filter(property =>
    propertyType === 'All' || property.type === propertyType
  );

  return (
    <div className="p-6 w-full mx-auto">
      <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">Properties in {locationName}</h1>
      <div className="text-center mb-6">
        <select 
          value={propertyType} 
          onChange={(e) => setPropertyType(e.target.value)}
          className="p-2 text-lg border w-3/6 border-green-200 rounded text-gray-800 bg-white dark:bg-gray-800 dark:text-gray-100"
        >
          
          <option value="All">All</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Plot">Plot</option>
          <option value="Villa">Villa</option>
        </select>
      </div>
      <div className="grid grid-cols-1 pr-10 pl-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProperties.map((property, index) => (
          <div 
            key={index} 
            className="shadow-lg  p-4 rounded transform transition-transform hover:scale-105 text-center bg-white dark:bg-gray-800"
          >
            <FontAwesomeIcon icon={getIcon(property.type)} size="4x" className="text-violet-900 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{property.type}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-1">{property.name}</p>
            <p className="text-gray-600 dark:text-gray-400">{property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationDetails;
