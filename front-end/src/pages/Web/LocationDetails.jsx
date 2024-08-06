// import React, { useState, useEffect } from 'react';
// import { useParams} from 'react-router-dom';

// const LocationDetails = () => {
//   const { locationName } = useParams();
//   const [propertyType, setPropertyType] = useState('All');
//   const [filteredProperties, setFilteredProperties] = useState([]);

//   const properties = {
//     chennai: [
//       { type: 'House', name: 'Beautiful House 1', price: '₹20,00,000', imageUrl: 'https://example.com/house1.jpg' },
//       { type: 'House', name: 'Beautiful House 2', price: '₹21,00,000', imageUrl: 'https://example.com/house2.jpg' },
//       { type: 'Apartment', name: 'Luxury Apartment 1', price: '₹15,00,000', imageUrl: 'https://example.com/apartment1.jpg' },
//       { type: 'Plot', name: 'Spacious Plot 1', price: '₹10,00,000', imageUrl: 'https://example.com/plot1.jpg' },
//       { type: 'Villa', name: 'Modern Villa 1', price: '₹30,00,000', imageUrl: 'https://example.com/villa1.jpg' }
//     ],
//     coimbatore: [
//       { type: 'House', name: 'Elegant House 1', price: '₹22,00,000', imageUrl: 'https://example.com/house3.jpg' },
//       { type: 'Apartment', name: 'Chic Apartment 1', price: '₹16,00,000', imageUrl: 'https://example.com/apartment2.jpg' },
//       { type: 'Plot', name: 'Large Plot 1', price: '₹12,00,000', imageUrl: 'https://example.com/plot2.jpg' },
//       { type: 'Villa', name: 'Luxury Villa 1', price: '₹35,00,000', imageUrl: 'https://example.com/villa2.jpg' }
//     ],
//     Madurai: [
//       { type: 'House', name: 'Modern House 1', price: '₹18,00,000', imageUrl: 'https://example.com/house4.jpg' },
//       { type: 'Apartment', name: 'Affordable Apartment 1', price: '₹14,00,000', imageUrl: 'https://example.com/apartment3.jpg' },
//       { type: 'Plot', name: 'Prime Plot 1', price: '₹11,00,000', imageUrl: 'https://example.com/plot3.jpg' },
//       { type: 'Villa', name: 'Exclusive Villa 1', price: '₹32,00,000', imageUrl: 'https://example.com/villa3.jpg' }
//     ],
//     trichy: [
//       { type: 'House', name: 'Comfortable House 1', price: '₹25,00,000', imageUrl: 'https://example.com/trichy-house1.jpg' },
//       { type: 'House', name: 'Comfortable House 2', price: '₹26,00,000', imageUrl: 'https://example.com/trichy-house2.jpg' },
//       { type: 'Apartment', name: 'Stylish Apartment 1', price: '₹17,00,000', imageUrl: 'https://example.com/trichy-apartment1.jpg' },
//       { type: 'Plot', name: 'Desirable Plot 1', price: '₹13,00,000', imageUrl: 'https://example.com/trichy-plot1.jpg' },
//       { type: 'Villa', name: 'Modern Villa 1', price: '₹34,00,000', imageUrl: 'https://example.com/trichy-villa1.jpg' }
//     ],
//     erode: [
//       { type: 'House', name: 'Elegant House 1', price: '₹21,00,000', imageUrl: 'https://example.com/erode-house1.jpg' },
//       { type: 'House', name: 'Elegant House 2', price: '₹22,00,000', imageUrl: 'https://example.com/erode-house2.jpg' },
//       { type: 'Apartment', name: 'Affordable Apartment 1', price: '₹15,00,000', imageUrl: 'https://example.com/erode-apartment1.jpg' },
//       { type: 'Plot', name: 'Spacious Plot 1', price: '₹12,00,000', imageUrl: 'https://example.com/erode-plot1.jpg' },
//       { type: 'Villa', name: 'Luxury Villa 1', price: '₹31,00,000', imageUrl: 'https://example.com/erode-villa1.jpg' }
//     ],
//     ooty: [
//       { type: 'House', name: 'Charming House 1', price: '₹28,00,000', imageUrl: 'https://example.com/ooty-house1.jpg' },
//       { type: 'House', name: 'Charming House 2', price: '₹29,00,000', imageUrl: 'https://example.com/ooty-house2.jpg' },
//       { type: 'Apartment', name: 'Cozy Apartment 1', price: '₹18,00,000', imageUrl: 'https://example.com/ooty-apartment1.jpg' },
//       { type: 'Plot', name: 'Scenic Plot 1', price: '₹14,00,000', imageUrl: 'https://example.com/ooty-plot1.jpg' },
//       { type: 'Villa', name: 'Hilltop Villa 1', price: '₹36,00,000', imageUrl: 'https://example.com/ooty-villa1.jpg' }
//     ],
//     trichy: [
//       { type: 'House', name: 'Comfortable House 1', price: '₹25,00,000', imageUrl: 'https://example.com/trichy-house1.jpg' },
//       { type: 'House', name: 'Comfortable House 2', price: '₹26,00,000', imageUrl: 'https://example.com/trichy-house2.jpg' },
//       { type: 'Apartment', name: 'Stylish Apartment 1', price: '₹17,00,000', imageUrl: 'https://example.com/trichy-apartment1.jpg' },
//       { type: 'Plot', name: 'Desirable Plot 1', price: '₹13,00,000', imageUrl: 'https://example.com/trichy-plot1.jpg' },
//       { type: 'Villa', name: 'Modern Villa 1', price: '₹34,00,000', imageUrl: 'https://example.com/trichy-villa1.jpg' }
//     ],
//     salem: [
//       { type: 'House', name: 'Spacious House 1', price: '₹24,00,000', imageUrl: 'https://example.com/salem-house1.jpg' },
//       { type: 'House', name: 'Spacious House 2', price: '₹25,00,000', imageUrl: 'https://example.com/salem-house2.jpg' },
//       { type: 'Apartment', name: 'Luxury Apartment 1', price: '₹20,00,000', imageUrl: 'https://example.com/salem-apartment1.jpg' },
//       { type: 'Plot', name: 'Prime Plot 1', price: '₹15,00,000', imageUrl: 'https://example.com/salem-plot1.jpg' },
//       { type: 'Villa', name: 'Elegant Villa 1', price: '₹33,00,000', imageUrl: 'https://example.com/salem-villa1.jpg' }
//     ],
//     kodaikanal: [
//       { type: 'House', name: 'Scenic House 1', price: '₹30,00,000', imageUrl: 'https://example.com/kodaikanal-house1.jpg' },
//       { type: 'House', name: 'Scenic House 2', price: '₹31,00,000', imageUrl: 'https://example.com/kodaikanal-house2.jpg' },
//       { type: 'Apartment', name: 'Charming Apartment 1', price: '₹22,00,000', imageUrl: 'https://example.com/kodaikanal-apartment1.jpg' },
//       { type: 'Plot', name: 'Beautiful Plot 1', price: '₹16,00,000', imageUrl: 'https://example.com/kodaikanal-plot1.jpg' },
//       { type: 'Villa', name: 'Luxurious Villa 1', price: '₹40,00,000', imageUrl: 'https://example.com/kodaikanal-villa1.jpg' }
//     ],
//     thirunelveli: [
//       { type: 'House', name: 'Traditional House 1', price: '₹23,00,000', imageUrl: 'https://example.com/thirunelveli-house1.jpg' },
//       { type: 'House', name: 'Traditional House 2', price: '₹24,00,000', imageUrl: 'https://example.com/thirunelveli-house2.jpg' },
//       { type: 'Apartment', name: 'Modern Apartment 1', price: '₹19,00,000', imageUrl: 'https://example.com/thirunelveli-apartment1.jpg' },
//       { type: 'Plot', name: 'Expansive Plot 1', price: '₹14,00,000', imageUrl: 'https://example.com/thirunelveli-plot1.jpg' },
//       { type: 'Villa', name: 'Elegant Villa 1', price: '₹35,00,000', imageUrl: 'https://example.com/thirunelveli-villa1.jpg' }
//     ],
//     tanjore: [
//       { type: 'House', name: 'Grand House 1', price: '₹26,00,000', imageUrl: 'https://example.com/tanjore-house1.jpg' },
//       { type: 'House', name: 'Grand House 2', price: '₹27,00,000', imageUrl: 'https://example.com/tanjore-house2.jpg' },
//       { type: 'Apartment', name: 'Premium Apartment 1', price: '₹21,00,000', imageUrl: 'https://example.com/tanjore-apartment1.jpg' },
//       { type: 'Plot', name: 'Developing Plot 1', price: '₹17,00,000', imageUrl: 'https://example.com/tanjore-plot1.jpg' },
//       { type: 'Villa', name: 'Luxury Villa 1', price: '₹38,00,000', imageUrl: 'https://example.com/tanjore-villa1.jpg' }
//     ],
//     nagercoil: [
//       { type: 'House', name: 'Elegant House 1', price: '₹22,00,000', imageUrl: 'https://example.com/nagercoil-house1.jpg' },
//       { type: 'House', name: 'Elegant House 2', price: '₹23,00,000', imageUrl: 'https://example.com/nagercoil-house2.jpg' },
//       { type: 'Apartment', name: 'Modern Apartment 1', price: '₹17,00,000', imageUrl: 'https://example.com/nagercoil-apartment1.jpg' },
//       { type: 'Plot', name: 'Prime Plot 1', price: '₹12,00,000', imageUrl: 'https://example.com/nagercoil-plot1.jpg' },
//       { type: 'Villa', name: 'Charming Villa 1', price: '₹33,00,000', imageUrl: 'https://example.com/nagercoil-villa1.jpg' }
//     ],
//     tuticorin: [
//       { type: 'House', name: 'Beautiful House 1', price: '₹25,00,000', imageUrl: 'https://example.com/tuticorin-house1.jpg' },
//       { type: 'House', name: 'Beautiful House 2', price: '₹26,00,000', imageUrl: 'https://example.com/tuticorin-house2.jpg' },
//       { type: 'Apartment', name: 'Stylish Apartment 1', price: '₹19,00,000', imageUrl: 'https://example.com/tuticorin-apartment1.jpg' },
//       { type: 'Plot', name: 'Scenic Plot 1', price: '₹13,00,000', imageUrl: 'https://example.com/tuticorin-plot1.jpg' },
//       { type: 'Villa', name: 'Modern Villa 1', price: '₹32,00,000', imageUrl: 'https://example.com/tuticorin-villa1.jpg' }
//     ],
//     pollachi: [
//       { type: 'House', name: 'Spacious House 1', price: '₹24,00,000', imageUrl: 'https://example.com/pollachi-house1.jpg' },
//       { type: 'House', name: 'Spacious House 2', price: '₹25,00,000', imageUrl: 'https://example.com/pollachi-house2.jpg' },
//       { type: 'Apartment', name: 'Cozy Apartment 1', price: '₹18,00,000', imageUrl: 'https://example.com/pollachi-apartment1.jpg' },
//       { type: 'Plot', name: 'Large Plot 1', price: '₹14,00,000', imageUrl: 'https://example.com/pollachi-plot1.jpg' },
//       { type: 'Villa', name: 'Elegant Villa 1', price: '₹30,00,000', imageUrl: 'https://example.com/pollachi-villa1.jpg' }
//     ],
//     kanchipuram: [
//       { type: 'House', name: 'Traditional House 1', price: '₹27,00,000', imageUrl: 'https://example.com/kanchipuram-house1.jpg' },
//       { type: 'House', name: 'Traditional House 2', price: '₹28,00,000', imageUrl: 'https://example.com/kanchipuram-house2.jpg' },
//       { type: 'Apartment', name: 'Elegant Apartment 1', price: '₹20,00,000', imageUrl: 'https://example.com/kanchipuram-apartment1.jpg' },
//       { type: 'Plot', name: 'Prime Plot 1', price: '₹16,00,000', imageUrl: 'https://example.com/kanchipuram-plot1.jpg' },
//       { type: 'Villa', name: 'Luxurious Villa 1', price: '₹35,00,000', imageUrl: 'https://example.com/kanchipuram-villa1.jpg' }
//     ],
//     sivakasi: [
//       { type: 'House', name: 'Modern House 1', price: '₹20,00,000', imageUrl: 'https://example.com/sivakasi-house1.jpg' },
//       { type: 'House', name: 'Modern House 2', price: '₹21,00,000', imageUrl: 'https://example.com/sivakasi-house2.jpg' },
//       { type: 'Apartment', name: 'Contemporary Apartment 1', price: '₹15,00,000', imageUrl: 'https://example.com/sivakasi-apartment1.jpg' },
//       { type: 'Plot', name: 'Desirable Plot 1', price: '₹12,00,000', imageUrl: 'https://example.com/sivakasi-plot1.jpg' },
//       { type: 'Villa', name: 'Luxurious Villa 1', price: '₹30,00,000', imageUrl: 'https://example.com/sivakasi-villa1.jpg' }
//     ],
//     mettupalayam: [
//       { type: 'House', name: 'Beautiful House 1', price: '₹23,00,000', imageUrl: 'https://example.com/mettupalayam-house1.jpg' },
//       { type: 'House', name: 'Beautiful House 2', price: '₹24,00,000', imageUrl: 'https://example.com/mettupalayam-house2.jpg' },
//       { type: 'Apartment', name: 'Charming Apartment 1', price: '₹16,00,000', imageUrl: 'https://example.com/mettupalayam-apartment1.jpg' },
//       { type: 'Plot', name: 'Prime Plot 1', price: '₹13,00,000', imageUrl: 'https://example.com/mettupalayam-plot1.jpg' },
//       { type: 'Villa', name: 'Elegant Villa 1', price: '₹32,00,000', imageUrl: 'https://example.com/mettupalayam-villa1.jpg' }
//     ],
//     krishnagiri: [
//       { type: 'House', name: 'Spacious House 1', price: '₹25,00,000', imageUrl: 'https://example.com/krishnagiri-house1.jpg' },
//       { type: 'House', name: 'Spacious House 2', price: '₹26,00,000', imageUrl: 'https://example.com/krishnagiri-house2.jpg' },
//       { type: 'Apartment', name: 'Cozy Apartment 1', price: '₹17,00,000', imageUrl: 'https://example.com/krishnagiri-apartment1.jpg' },
//       { type: 'Plot', name: 'Expansive Plot 1', price: '₹14,00,000', imageUrl: 'https://example.com/krishnagiri-plot1.jpg' },
//       { type: 'Villa', name: 'Modern Villa 1', price: '₹33,00,000', imageUrl: 'https://example.com/krishnagiri-villa1.jpg' }
//     ]

//   };

//   useEffect(() => {
//     const filterProperties = () => {
//       console.log('locationName:', locationName); // Debugging statement
//       console.log('properties:', properties); // Debugging statement
//       const normalizedLocationName = locationName.toLowerCase();
//       if (!properties[normalizedLocationName]) {
//         console.error(`No properties found for location: ${locationName}`);
//         setFilteredProperties([]);
//         return;
//       }
      
//       const filtered = propertyType === 'All'
//         ? properties[normalizedLocationName]
//         : properties[normalizedLocationName].filter(property => property.type === propertyType);
        
//       console.log(`Filtered properties for ${locationName} (${propertyType}):`, filtered);
//       setFilteredProperties(filtered);
//     };

//     filterProperties();
//   }, [locationName, propertyType]);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4 flexd justify-center items-center">Properties in {locationName}</h1>
//       <select
//         className="w-100  flex justify-center items-center p-2 text-gray-700 border border-purple-200 rounded-lg shadow-md bg-white dark:bg-secondary dark:text-secondary-foreground focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
//         value={propertyType}
//         onChange={(e) => setPropertyType(e.target.value)}
//       >
//         <option value="All">All</option>
//         <option value="House">House</option>
//         <option value="Apartment">Apartment</option>
//         <option value="Plot">Plot</option>
//         <option value="Villa">Villa</option>
//       </select>
//       {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredProperties.length > 0 ? (
//           filteredProperties.map((property, index) => (
//             <div key={index} className="border border-gray-300 rounded-lg p-4">
//               <img className="w-full h-48 object-cover rounded-lg mb-4" src={property.imageUrl} alt={property.name} />
//               <h3 className="text-lg font-semibold mb-2">{property.name}</h3>
//               <p className="text-gray-700">{property.price}</p>
//             </div>
//           ))
//         ) : (
//           <p className="col-span-full text-center">No properties found for the selected type.</p>
//         )}
//       </div> */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-100">
//   {filteredProperties.length > 0 ? (
//     filteredProperties.map((property, index) => (
//       <div key={index} className=" w-full  py-6 px-10">
//         <div className="bg-white shadow-xl rounded-lg overflow-hidden">
//           <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${property.imageUrl})` }}>
//             <div className="flex justify-end">
//               <svg className="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
//               </svg>
//             </div>
//           </div>
//           <div className="p-4">
//             <p className="uppercase tracking-wide text-sm font-bold text-gray-700">Detached house • 5y old</p>
//             <p className="text-3xl text-gray-900">${property.price}</p>
//             <p className="text-gray-700">{property.address}</p>
//           </div>
//           <div className="flex p-4 border-t border-gray-300 text-gray-700">
//             <div className="flex-1 inline-flex items-center">
//               <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
//               </svg>
//               <p><span className="text-gray-900 font-bold">3</span> Bedrooms</p>
//             </div>
//             <div className="flex-1 inline-flex items-center">
//               <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path fillRule="evenodd" d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"></path>
//               </svg>
//               <p><span className="text-gray-900 font-bold">2</span> Bathrooms</p>
//             </div>
//           </div>
//           <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
//             <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">Realtor</div>
//             <div className="flex items-center pt-2">
//               <div className="bg-cover bg-center w-10 h-10 rounded-full mr-3" style={{ backgroundImage: `url(${property.realtorImageUrl})` }}></div>
//               <div>
//                 <p className="font-bold text-gray-900">{property.realtorName}</p>
//                 <p className="text-sm text-gray-700">{property.realtorContact}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))
//   ) : (
//     <p className="col-span-full text-center">No properties found for the selected type.</p>
//   )}
// </div>
//     </div>
//   );
// };

// export default LocationDetails;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LocationDetails = () => {
  const { locationName } = useParams();
  const [properties, setProperties] = useState([]);
  const [propertyType, setPropertyType] = useState('All');
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/properties/${locationName}`);
        setProperties(response.data);
        setFilteredProperties(response.data);
      } catch (error) {
        console.error('Failed to fetch properties', error);
      }
    };

    fetchProperties();
  }, [locationName]);

  useEffect(() => {
    if (propertyType === 'All') {
      setFilteredProperties(properties);
    } else {
      setFilteredProperties(properties.filter(property => property.type === propertyType));
    }
  }, [propertyType, properties]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">Properties in {locationName}</h1>
      <select
        className="w-100 flex justify-center items-center p-2 text-gray-700 border border-purple-200 rounded-lg shadow-md bg-white dark:bg-secondary dark:text-secondary-foreground focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
      >
        <option value="All">All</option>
        <option value="House">House</option>
        <option value="Apartment">Apartment</option>
        <option value="Plot">Plot</option>
        <option value="Villa">Villa</option>
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-100">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property, index) => (
            <div key={index} className="w-full py-6 px-10">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${property.imageUrl || 'default-image-url'})` }}>
                  <div className="flex justify-end">
                    <svg className="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <p className="uppercase tracking-wide text-sm font-bold text-gray-700">Detached house • 5y old</p>
                  <p className="text-3xl text-gray-900">${property.price}</p>
                  <p className="text-gray-700">{property.address}</p>
                </div>
                <div className="flex p-4 border-t border-gray-300 text-gray-700">
                  <div className="flex-1 inline-flex items-center">
                    <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
                    </svg>
                    <p><span className="text-gray-900 font-bold">{property.bedrooms || 'N/A'}</span> Bedrooms</p>
                  </div>
                  <div className="flex-1 inline-flex items-center">
                    <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"></path>
                    </svg>
                    <p><span className="text-gray-900 font-bold">{property.bathrooms || 'N/A'}</span> Bathrooms</p>
                  </div>
                </div>
                <div className="flex items-center p-4 border-t border-gray-300 text-gray-700">
                  {property.realtor && property.realtor.image ? (
                    <div className="flex items-center pt-2">
                      <div className="bg-cover bg-center w-10 h-10 rounded-full mr-3" style={{ backgroundImage: `url(${property.realtor.image})` }}>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{property.realtor.name}</p>
                        <p className="text-sm text-gray-700">{property.realtor.phone}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center pt-2">
                      <div className="w-10 h-10 rounded-full mr-3 bg-gray-300"></div>
                      <div>
                        <p className="font-bold text-gray-900">Unknown Realtor</p>
                        <p className="text-sm text-gray-700">N/A</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No properties available in {locationName}.</p>
        )}
      </div>
    </div>
  );
};

export default LocationDetails;
