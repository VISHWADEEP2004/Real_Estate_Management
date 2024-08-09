import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { ThemeProvider } from './components/ThemeProvider.jsx'
import { AuthProvider } from './components/contexts/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App />
      
    </ThemeProvider>
  </React.StrictMode>,
)
