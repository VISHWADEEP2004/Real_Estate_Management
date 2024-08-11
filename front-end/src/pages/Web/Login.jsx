import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/components/contexts/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth(); 
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
            console.log('Response:', response.data);
    
            const { token, role, username, userId } = response.data;
    
            if (token) {
                login(token, role);
                localStorage.setItem('token', token);
                localStorage.setItem('username', username);
                localStorage.setItem('userId', userId); // Store userId in localStorage
                toast.success('Login successful!');
            } else {
                setError('Invalid email or password');
                toast.error('Invalid email or password');
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
                    <CardTitle className="text-2xl flex justify-center items-center">User Login</CardTitle>
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

export default Login;
