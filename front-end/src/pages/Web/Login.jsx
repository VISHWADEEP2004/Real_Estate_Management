// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // Check for specific admin credentials
//       if (email === 'admin@gmail.com' && password === 'password') {
//         navigate('/admindashboard');
//         toast.success('Login successful!');
//         return;
//       }

//       // Fetch all users
//       const response = await axios.get('http://localhost:8080/api/users/all');
//       const userData = response.data;

//       // Find user by email
//       const user = userData.find(user => user.email === email);

//       if (user) {
//         if (user.password === password) {
//           if (user.role === 'agent') {
//             navigate('/agentdashboard');
//           } else {
//             navigate('/userdashboard');
//           }
//           toast.success('Login successful!');
//         } else {
//           setError('Invalid password');
//           toast.error('Invalid password');
//         }
//       } else {
//         setError('User not found');
//         toast.error('User not found');
//       }
//     } catch (error) {
//       setError('Failed to login. Please try again.');
//       toast.error('Failed to login. Please try again.');
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       handleLogin(e);
//     }
//   };

//   return (
//     <div className="h-full w-full flex justify-center items-center">
//       <Card className="w-1/4">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl flex justify-center items-center">Login</CardTitle>
//         </CardHeader>
//         <form onSubmit={handleLogin}>
//           <CardContent className="grid gap-4">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <span className="w-full border-t" />
//               </div>
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="user@gmail.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 onKeyDown={handleKeyDown}
//               />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="******"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 onKeyDown={handleKeyDown}
//               />
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Button className="w-full" type="submit">Login</Button>
//           </CardFooter>
//         </form>
//         <ToastContainer position="bottom-right" autoClose={3000} />
//       </Card>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Check for specific admin credentials
      if (email === 'admin@gmail.com' && password === 'password') {
        localStorage.setItem('userRole', 'admin');
        navigate('/admindashboard');
        toast.success('Login successful!');
        return;
      }

      // Fetch all users
      const response = await axios.get('http://localhost:8080/api/users/all');
      const userData = response.data;

      // Find user by email
      const user = userData.find(user => user.email === email);

      if (user) {
        if (user.password === password) {
          localStorage.setItem('userRole', user.role); // Store user role in localStorage
          if (user.role === 'agent') {
            navigate('/agentdashboard');
          } else {
            navigate('/userdashboard');
          }
          toast.success('Login successful!');
        } else {
          setError('Invalid password');
          toast.error('Invalid password');
        }
      } else {
        setError('User not found');
        toast.error('User not found');
      }
    } catch (error) {
      setError('Failed to login. Please try again.');
      toast.error('Failed to login. Please try again.');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin(e);
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <Card className="w-1/4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl flex justify-center items-center">Login</CardTitle>
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
                onKeyDown={handleKeyDown}
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
                onKeyDown={handleKeyDown}
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
