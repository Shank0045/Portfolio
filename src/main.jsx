import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthData from './AuthData.jsx'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(

  <BrowserRouter basename='/Portfolio'>

  <StrictMode>
    <AuthData> <App /></AuthData>
  </StrictMode>  
  </BrowserRouter>,
)
