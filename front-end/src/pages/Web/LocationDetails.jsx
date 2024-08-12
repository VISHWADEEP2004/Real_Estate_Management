
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const LocationDetails = () => {
  const { locationName } = useParams();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [propertyType, setPropertyType] = useState('All');
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    const fetchProperties = async () => {
      try {
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
        const favoritesResponse = await axios.post('http://localhost:8080/api/favorites');
        setFavorites(new Set(favoritesResponse.data.map(property => property.id)));
      } catch (error) {
        console.error('Error fetching properties:', error);
        toast.error('An error occurred while fetching properties.');
      } finally {
        setLoading(false);
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

  const handleFavorite = async (propertyId) => {
    const userId = localStorage.getItem('userId');
    
    if (!userId) {
      console.log('User is not authenticated.');
      return;
    }
    
    try {
      if (favorites.has(propertyId)) {
        // Remove from favorites
        await axios.delete(`http://localhost:8080/api/favorites?userId=${userId}&propertyId=${propertyId}`);
        setFavorites(prevFavorites => {
          const newFavorites = new Set(prevFavorites);
          newFavorites.delete(propertyId);
          return newFavorites;
        });
        toast.info('Removed from favorites.');
      } else {
        // Add to favorites
        await axios.post(`http://localhost:8080/api/favorites?userId=${userId}&propertyId=${propertyId}`);
        setFavorites(prevFavorites => new Set(prevFavorites).add(propertyId));
        toast.success('Added to favorites.');
      }
    } catch (error) {
      console.error('Error updating favorites:', error);
      toast.error('An error occurred while updating favorites.');
    }
  };
  
  
  
  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">
        Properties in {locationName}
      </h1>
      <select
        className="w-full p-2 text-gray-700 border border-purple-200 rounded-lg shadow-md bg-white dark:bg-secondary dark:text-secondary-foreground focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
      >
        <option value="All">All</option>
        <option value="House">House</option>
        <option value="Apartment">Apartment</option>
        <option value="Plot">Plot</option>
        <option value="Villa">Villa</option>
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div key={property.id} className="w-full py-6 px-10">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden border">
                <img
                  src={property.image ? `data:image/jpeg;base64,${property.image}` : '/path/to/default-image.jpg'}
                  alt="Property"
                  className="h-56 w-full object-cover"
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
                  {property.agent && (
                    <>
                      <p className="text-gray-700">Agent Name: {property.agent.name}</p>
                      <p className="text-gray-700">Agent Phone: {property.agent.phone}</p>
                    </>
                  )}
                  <button
                    onClick={() => handleFavorite(property.id)}
                    className={`mt-4 p-2 rounded-lg ${favorites.has(property.id) ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                  >
                    {favorites.has(property.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                  </button>
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
