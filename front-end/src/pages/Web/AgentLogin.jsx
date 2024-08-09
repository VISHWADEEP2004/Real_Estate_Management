import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AgentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agencyName, setAgencyName] = useState(''); // Additional field
  const [phoneNumber, setPhoneNumber] = useState(''); // Additional field
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/agentlogin', { email, password, agencyName, phoneNumber });
      console.log('Response:', response.data); 
      const token = response.data.token;

      if (token) {
        localStorage.setItem('userRole', response.data.role); 
        localStorage.setItem('token', token);
        navigate('/agentdashboard');
        toast.success('Login successful!');
      } else {
        setError('Invalid email, password, agency name, or phone number');
        toast.error('Invalid email, password, agency name, or phone number');
      }
    } catch (error) {
      setError('Failed to login. Please try again.');
      toast.error('Failed to login. Please try again.');
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <Card className="w-1/4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl flex justify-center items-center">Agent Login</CardTitle>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="grid gap-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="user@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="agencyName">Agency Name</Label>
              <Input
                id="agencyName"
                type="text"
                placeholder="Enter your agency name"
                value={agencyName}
                onChange={(e) => setAgencyName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">Login</Button>
          </CardFooter>
        </form>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </Card>
    </div>
  );
};

export default AgentLogin;
