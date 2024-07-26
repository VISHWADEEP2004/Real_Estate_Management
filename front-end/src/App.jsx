
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WebLayout from './layout/WebLayout';
import Register from './pages/Web/Register';
import PageNotFound from './pages/Web/PageNotFound';
import Login from './pages/Web/Login';
import Home from './pages/Web/Home';
import AdminLayout from './layout/AdminLayout';
import UserDashboard from './pages/User/UserDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import UserLayout from './layout/UserLayout';
import { AdminUsers } from './pages/Admin/AdminUsers';
import Userdetails from './pages/User/Userdetails';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<WebLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route element={<UserLayout/>}>
          <Route path='/user/dashboard' element={<UserDashboard/>}/>
            <Route path='/user/userdetails' element={<Userdetails />} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
            <Route path='/admin/users' element={<AdminUsers />} />
          </Route>
            <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
