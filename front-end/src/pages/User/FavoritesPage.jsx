import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const FavoritesPage = () => {
  const [favoriteProperties, setFavoriteProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/favorites/${userId}`);
        const propertyIds = response.data;
        const propertyDetailsPromises = propertyIds.map(propertyId =>
          axios.get(`http://localhost:8080/api/properties/details/${propertyId}`)
        );

        const propertyDetailsResponses = await Promise.all(propertyDetailsPromises);
        const properties = propertyDetailsResponses.map(res => res.data);

        setFavoriteProperties(properties);
      } catch (error) {
        console.error('Error fetching favorite properties:', error);
        toast.error('Failed to load favorite properties.');
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [userId]);

  const handleRemoveFavorite = async (propertyId) => {
    try {
      await axios.delete(`http://localhost:8080/api/favorites?userId=${userId}&propertyId=${propertyId}`);
      setFavoriteProperties(prevFavorites => prevFavorites.filter(property => property.id !== propertyId));
      toast.info('Removed from favorites.');
    } catch (error) {
      console.error('Error removing favorite:', error);
      toast.error('Failed to remove from favorites.');
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (favoriteProperties.length === 0) {
    return <div className="text-center">No favorite properties found.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Favorite Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favoriteProperties.map(property => (
          <div key={property.id} className="bg-white shadow-md rounded p-4">
            <img
              src={property.image ? `data:image/jpeg;base64,${property.image}` : '/path/to/default-image.jpg'}
              alt={property.contactName}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-lg font-semibold">{property.contactName}</h2>
            <p>{property.bhk} BHK - {property.location}</p>
            <p className="text-gray-600">Price: ₹{property.price}</p>
            <p className="text-gray-600">Type: {property.type}</p>
            <p className="text-gray-600">Agent: {property.agentName}</p>
            <p className="text-gray-600">Contact: {property.agentPhone} | {property.agentEmail}</p>
            <button
              onClick={() => handleRemoveFavorite(property.id)}
              className="mt-4 p-2 bg-red-500 text-white rounded-lg"
            >
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
