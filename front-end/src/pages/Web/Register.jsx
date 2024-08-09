import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};
    let hasErrors = false;

    // Client-side validation
    if (!formData.name) {
      validationErrors.name = 'Name is required';
      hasErrors = true;
    }
    if (!formData.username) {
      validationErrors.username = 'Username is required';
      hasErrors = true;
    }
    if (!formData.email) {
      validationErrors.email = 'Email is required';
      hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is invalid';
      hasErrors = true;
    }
    if (!formData.password) {
      validationErrors.password = 'Password is required';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(validationErrors);
      toast.error('Please fill out all required fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', formData);

      toast.success('Registration successful!');
    } catch (error) {
      console.error('Full error:', error);

      if (error.response) {
        if (error.response.data) {
          if (error.response.data === 'Email already exists') {
            toast.error('Registration failed: Email already exists.');
          } else {
            toast.error('Registration failed: ' + (error.response.data.message || 'Please try again.'));
          }
        } else {
          toast.error('Registration failed. Please try again.');
        }
      } else {
        toast.error('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className='h-screen flex justify-center items-center'>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Register</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className={errors.username ? 'border-red-500' : ''}
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="user@example.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="******"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'border-red-500' : ''}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">Create account</Button>
          </CardFooter>
        </form>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </Card>
    </div>
  );
};

export default Register;
