// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useParams, useNavigate } from 'react-router-dom';

// const EditPropertyPage = () => {
//   const { propertyId } = useParams();
//   const [property, setProperty] = useState(null);
//   const [formData, setFormData] = useState({
//     bhk: '',
//     location: '',
//     price: '',
//     type: '',
//     contactName: '',
//     image: ''
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProperty = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           toast.error('No authentication token found.');
//           navigate('/login'); // Redirect to login if no token
//           return;
//         }

//         const response = await axios.get(`http://localhost:8080/api/properties/${propertyId}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });

//         setProperty(response.data);
//         setFormData(response.data);
//       } catch (error) {
//         console.error('Error fetching property:', error.message);
//         toast.error('An error occurred while fetching the property.');
//       }
//     };

//     fetchProperty();
//   }, [propertyId, navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('No authentication token found.');
//         navigate('/login'); // Redirect to login if no token
//         return;
//       }

//       await axios.put(`http://localhost:8080/api/properties/${propertyId}`, formData, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       toast.success('Property updated successfully.');
//       navigate('/properties'); // Navigate back to properties page
//     } catch (error) {
//       console.error('Error updating property:', error.message);
//       toast.error('An error occurred while updating the property.');
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Edit Property</h1>
//       {property ? (
//         <form onSubmit={handleSubmit}>
//           {Object.keys(formData).map(key => (
//             <div key={key} className="mb-4">
//               <label className="block text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
//               <input
//                 type={key === 'price' ? 'number' : 'text'}
//                 name={key}
//                 value={formData[key]}
//                 onChange={handleChange}
//                 className="border px-4 py-2 rounded w-full"
//               />
//             </div>
//           ))}
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Save Changes
//           </button>
//         </form>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default EditPropertyPage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';

const EditPropertyPage = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);
  const [formData, setFormData] = useState({
    bhk: '',
    location: '',
    price: '',
    type: '',
    contactName: '',
    image: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          toast.error('No authentication token found.');
          navigate('/login'); // Redirect to login if no token
          return;
        }

        // Debug log to check the propertyId and token
        console.log('Fetching property with ID:', propertyId);
        console.log('Using token:', token);

        const response = await axios.get(`http://localhost:8080/api/properties/${propertyId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        // Debug log to check the response data
        console.log('Fetched property response:', response.data);

        if (response.data) {
          setProperty(response.data);
          setFormData(response.data);
        } else {
          toast.error('Property not found.');
          navigate('/properties'); // Redirect if no property found
        }
      } catch (error) {
        console.error('Error fetching property:', error.message);
        toast.error('An error occurred while fetching the property.');
      }
    };

    fetchProperty();
  }, [propertyId, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('No authentication token found.');
        navigate('/login'); // Redirect to login if no token
        return;
      }

      await axios.put(`http://localhost:8080/api/properties/${propertyId}`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      toast.success('Property updated successfully.');
      navigate('/properties'); // Navigate back to properties page
    } catch (error) {
      console.error('Error updating property:', error.message);
      toast.error('An error occurred while updating the property.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Property</h1>
      {property ? (
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map(key => (
            <div key={key} className="mb-4">
              <label className="block text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type={key === 'price' ? 'number' : 'text'}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="border px-4 py-2 rounded w-full"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditPropertyPage;
