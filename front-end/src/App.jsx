
import React from 'react'
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
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
import LocationDetails from './pages/Web/LocationDetails';
import ProfilePage from './pages/User/ProfilePage';
import PropertyDetails from './pages/Web/PropertyDetails';
import Locations from './pages/Web/Locations';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<WebLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/location' element={<Locations/>}/>
            <Route path='/location/:locationName' element={<LocationDetails />} />
            <Route path='/property/:propertyName' element={<PropertyDetails/>} /> 
            </Route>
          <Route element={<UserLayout/>}>
          <Route path='/userdashboard' element={<UserDashboard/>}/>
            <Route path='/userprofile' element={<ProfilePage />} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route path='/admindashboard' element={<AdminDashboard />} />
            <Route path='/adminusers' element={<AdminUsers />} />
          </Route>
            <Route path='/*' element={<PageNotFound />} />
           
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
