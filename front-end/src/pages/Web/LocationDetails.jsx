import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const LocationDetails = () => {
  const { locationName } = useParams();
  const [properties, setProperties] = useState([]);
  const [propertyType, setPropertyType] = useState('All');
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Fetch properties by location name
        const response = await axios.get(`http://localhost:8080/api/properties/${locationName}`);
  
        // Fetch agent details for each property using the agentId
        const propertiesWithAgents = await Promise.all(
          response.data.map(async (property) => {
            const agentResponse = await axios.get(`http://localhost:8080/api/agents/${property.agentId}`);
            return { ...property, agent: agentResponse.data };
          })
        );
  
        // Set the state with the fetched properties and filtered properties
        setProperties(propertiesWithAgents);
        setFilteredProperties(propertiesWithAgents);
      } catch (error) {
        console.error('Error status:', error.response?.status);
        console.error('Error details:', error.response?.data);
  
        // Show an error message if there's an issue with fetching properties
        toast.error('An error occurred while fetching properties.');
      }
    };
  
    fetchProperties();
  }, [locationName]);
  
  useEffect(() => {
    // Filter properties based on the selected property type
    if (propertyType === 'All') {
      setFilteredProperties(properties);
    } else {
      setFilteredProperties(properties.filter(property => property.type === propertyType));
    }
  }, [propertyType, properties]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">
        Properties in {locationName}
      </h1>
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
          filteredProperties.map((property) => (
            <div key={property.id} className="w-full py-6 px-10">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div
                  className="bg-cover bg-center h-56 p-4"
                  style={{
                    backgroundImage: `url(${property.img || 'default-image-url'})`,
                  }}
                />
                <div className="p-4">
                  <p className="text-sm font-bold text-gray-700">
                    Type: {property.type}
                  </p>
                  <p className="text-3xl text-gray-900">
                    ${property.price ? parseFloat(property.price).toFixed(2) : 'N/A'}
                  </p>
                  <p className="text-gray-700">Location: {property.location}</p>
                  <p className="text-gray-700">BHK: {property.bhk}</p>
                  <p className="text-gray-700">Contact: {property.contactName}</p>
                  <p className="text-gray-700">Agent Name: {property.agent.name}</p>
                  <p className="text-gray-700">Agent Phone: {property.agent.phone}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full text-center py-10">No properties found.</div>
        )}
      </div>
    </div>
  );
};

export default LocationDetails;
