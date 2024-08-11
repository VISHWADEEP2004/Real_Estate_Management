import React, { useState } from 'react';
import axios from 'axios';

const AddProperty = () => {
    const [formData, setFormData] = useState({
        bhk: '',
        contactName: '',
        location: '',
        price: '',
        type: '',
        agentId: '', // Ensure this is fetched from localStorage
        image: '' // Base64 string for image
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({
                    ...prevData,
                    image: reader.result.split(',')[1] // Only keep the Base64 string
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Get agent ID from local storage
            const agentId = localStorage.getItem('userId');
            if (!agentId) {
                console.error('Agent ID is missing from local storage');
                return;
            }

            // Add agent ID to form data
            const updatedFormData = { ...formData, agentId };

            const response = await axios.post('http://localhost:8080/api/properties', updatedFormData);
            console.log("Server Response: ", response); // Log server response
        } catch (error) {
            console.error("Error adding property:", error.message); // Log error message
            console.error("Error Details:", error.response?.data || error); // Log detailed error response
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="bhk"
                value={formData.bhk}
                onChange={handleChange}
                placeholder="BHK"
            />
            <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                placeholder="Contact Name"
            />
            <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
            />
            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
            />
            <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Type"
            />
            <input
                type="file"
                name="image"
                onChange={handleFileChange}
            />
            <button type="submit">Add Property</button>
        </form>
    );
};

export default AddProperty;
