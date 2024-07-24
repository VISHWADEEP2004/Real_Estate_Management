
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WebLayout from './layout/WebLayout';
import Register from './pages/Web/Register';
import PageNotFound from './pages/Web/PageNotFound';
import Login from './pages/Web/Login';
import Home from './pages/Web/Home';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<WebLayout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/*' element={<PageNotFound />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
