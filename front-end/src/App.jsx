import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import WebLayout from './layout/WebLayout';
import Register from './pages/Web/Register';
import PageNotFound from './pages/Web/Glitch404';
import Login from './pages/Web/Login';
import Home from './pages/Web/Home';
import AdminLayout from './layout/AdminLayout';
import UserDashboard from './pages/User/UserDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import { AdminUsers } from './pages/Admin/AdminUsers';
import LocationDetails from './pages/Web/LocationDetails';
import ProfilePage from './pages/User/ProfilePage';
import PropertyDetails from './pages/Web/PropertyDetails';
import Locations from './pages/Web/Locations';
import ServiceSection from './pages/Web/ServiceSection';
import AgentDashboard from './pages/Agent/AgentDashboard';
import AgentLayout from './layout/AgentLayout';
import { AdminAgents } from './pages/Admin/AdminAgents';
import AddProperty from './pages/Agent/AddProperty';
import CareerLayout from './layout/CareerLayout';
import CareersPage from './components/Career/CareerPage';
import JoinUs from './components/Career/JoinUs';
import TermsAndConditions from './pages/Web/TermsAndConditions';
import AgentLogin from './pages/Web/AgentLogin';
import Settings from './pages/Admin/Settings';
import Events from './pages/Admin/Events';
import Analytics from './pages/Admin/Analytics';
import { AuthProvider, useAuth } from './components/contexts/AuthContext';
import UserLeftBar from './components/User/UserLeftbar';
import UserLayout from './layout/UserLayout';
import Navbar from './components/Web/Navbar';
import UserNavbar from './components/User/UserNavbar';

const AppRoutes = () => {
  const { isLoggedIn, userRole } = useAuth();

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route element={<WebLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    );
  }




  if (isLoggedIn && userRole === 'USER') {
    return (
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServiceSection />} />
          <Route path="/location" element={<Locations />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/location/:locationName" element={<LocationDetails />} />
          <Route path="/property/:propertyName" element={<PropertyDetails />} />
          {/* Redirect to home if user tries to access the root URL */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    );
  }

  if (isLoggedIn && userRole === 'ADMIN') {
    return (
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminusers" element={<AdminUsers />} />
          <Route path="/adminagents" element={<AdminAgents />} />
          <Route path="/adminsettings" element={<Settings />} />
          <Route path="/adminevents" element={<Events />} />
          <Route path="/adminanalytics" element={<Analytics />} />
          {/* <Route path="*" element={<Navigate to="/admindashboard" />} /> */}
        </Route>
      </Routes>
    );
  }

  if (isLoggedIn && userRole === 'AGENT') {
    return (
      <Routes>
        <Route element={<AgentLayout />}>
          <Route path="/agentdashboard" element={<AgentDashboard />} />
          <Route path="/addproperties" element={<AddProperty />} />
          {/* <Route path="*" element={<Navigate to="/agentdashboard" />} /> */}
        </Route>
        <Route element={<CareerLayout />}>
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/joinus" element={<JoinUs />} />
          {/* <Route path="*" element={<Navigate to="/careers" />} /> */}
        </Route>
      </Routes>
    );
  }

  // Default to Page Not Found if no role matches
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
