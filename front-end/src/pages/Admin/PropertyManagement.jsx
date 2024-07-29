// PropertyManagement.jsx
import React from 'react';

const properties = [
    { id: 1, title: 'Modern Apartment', price: '$1200/month', location: 'New York, NY' },
    { id: 2, title: 'Cozy House', price: '$2000/month', location: 'San Francisco, CA' },
    // Add more properties here
];

const PropertyManagement = () => {
    return (
        <div className="property-management">
            <h1>Property Management</h1>
            <button>Add Property</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map(property => (
                        <tr key={property.id}>
                            <td>{property.id}</td>
                            <td>{property.title}</td>
                            <td>{property.price}</td>
                            <td>{property.location}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PropertyManagement;
