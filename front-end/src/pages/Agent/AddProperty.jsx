import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AddProperty = () => {
  const [imageFile, setImageFile] = useState(null);
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [agentName, setAgentName] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [contactName, setContactName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8080/api/properties/uploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setImageUrl(response.data); // Set the URL of the uploaded image
      return response.data;
    } catch (error) {
      toast.error('Image upload failed: ' + error.message);
      return null;
    }
  };

  const handleAddProperty = async (e) => {
    e.preventDefault();

    if (imageFile) {
      const uploadedImageUrl = await handleImageUpload(imageFile);
      if (!uploadedImageUrl) return; // Exit if image upload failed

      try {
        const response = await axios.post('http://localhost:8080/api/properties', {
          imageUrl: uploadedImageUrl,
          location,
          name,
          price,
          type,
          agentName,
          bedrooms,
          bathrooms,
          contactName,
        });

        if (response.status === 201) {
          toast.success('Property added successfully!');
          navigate('/agentdashboard');
        } else {
          toast.error('Failed to add property');
        }
      } catch (error) {
        toast.error('Failed to add property: ' + error.message);
      }
    } else {
      toast.error('Please upload an image');
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <Card className="w-1/4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl flex justify-center items-center">Add Property</CardTitle>
        </CardHeader>
        <form onSubmit={handleAddProperty}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="imageUpload">Image</Label>
              <Input
                id="imageUpload"
                type="file"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setImageFile(e.target.files[0]);
                  }
                }}
              />
              {imageUrl && <img src={imageUrl} alt="Property" className="mt-2" />}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Property Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter property name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="type">Type</Label>
              <Input
                id="type"
                type="text"
                placeholder="Enter property type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="agentName">Agent Name</Label>
              <Input
                id="agentName"
                type="text"
                placeholder="Enter agent name"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bedrooms">Number of Bedrooms</Label>
              <Input
                id="bedrooms"
                type="number"
                placeholder="Enter number of bedrooms"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bathrooms">Number of Bathrooms</Label>
              <Input
                id="bathrooms"
                type="number"
                placeholder="Enter number of bathrooms"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contactName">Contact Name</Label>
              <Input
                id="contactName"
                type="text"
                placeholder="Enter contact name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">Add Property</Button>
          </CardFooter>
        </form>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </Card>
    </div>
  );
};

export default AddProperty;
