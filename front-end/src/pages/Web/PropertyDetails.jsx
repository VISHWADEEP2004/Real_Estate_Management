
import React from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const properties = [
  { 
    name: 'Beautiful House 1', 
    price: '₹20,00,000', 
    type: 'House', 
    location: 'Chennai', 
    interiorImages: ['https://i2.au.reastatic.net/1176x680-resize,extend,r=33,g=40,b=46/3db894c59cc568097759cf387e163f04672225eeb330513ca64785e0b430df36/image3.jpg', 'https://i2.au.reastatic.net/1176x680-resize,extend,r=33,g=40,b=46/7895b25a30333f11e7c244ef4fc91908f3ca7a146dc14ac9f9db17939aea9234/image2.jpg'], 
    exteriorImages: ['https://i2.au.reastatic.net/1176x680-resize,extend,r=33,g=40,b=46/288585f59aa0483e500795d4ba59d57e2da940cce1e4d68d3b66407944edf363/image4.jpg', 'https://i2.au.reastatic.net/1176x680-resize,extend,r=33,g=40,b=46/474152fcfd02f3011713a19221832f6d55fee674791d04885936a5867e58900a/image5.jpg'], 
    owner: { name: 'John Doe', phone: '1234567890', email: 'johndoe@example.com' }, 
    mapPosition: [13.0827, 80.2707]
  },
];

const PropertyDetails = () => {
  const { propertyName } = useParams();
  const decodedPropertyName = decodeURIComponent(propertyName); // Decode URL encoding
  const property = properties.find(p => p.name === decodedPropertyName);

  if (!property) return <div>Property not found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">{property.name}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Interior Images</h2>
          <div className="grid grid-cols-2 gap-4">
            {property.interiorImages.map((image, index) => (
              <img key={index} src={image} alt={`Interior ${index + 1}`} className="w-full h-40 object-cover rounded-lg shadow-md" />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Exterior Images</h2>
          <div className="grid grid-cols-2 gap-4">
            {property.exteriorImages.map((image, index) => (
              <img key={index} src={image} alt={`Exterior ${index + 1}`} className="w-full h-40 object-cover rounded-lg shadow-md" />
            ))}
          </div>
        </div>
      </div>
      <div className="my-6">
        <h2 className="text-xl font-semibold mb-4">Location</h2>
        <MapContainer center={property.mapPosition} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={property.mapPosition}>
            <Popup>
              {property.name}<br />
              {property.location}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="my-6">
        <h2 className="text-xl font-semibold mb-4">Owner Details</h2>
        <p><strong>Name:</strong> {property.owner.name}</p>
        <p><strong>Phone:</strong> {property.owner.phone}</p>
        <p><strong>Email:</strong> {property.owner.email}</p>
      </div>
      <div className="my-6">
        <h2 className="text-xl font-semibold mb-4">Enquiry Form</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
              placeholder="Your message"
            ></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Send Enquiry</button>
        </form>
      </div>
    </div>
  );
};

export default PropertyDetails;
