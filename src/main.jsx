import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <ToastContainer position="top-center" style={{fontSize: '10px', 
    maxWidth: '350px', 
  }}/> */}
  <ToastContainer 
  position="top-center" 
  autoClose={3000} 
  hideProgressBar={false} 
  newestOnTop={false} 
  closeOnClick
  rtl={true} 
  pauseOnFocusLoss 
  draggable 
  pauseOnHover
  theme="dark"
  style={{
    fontSize: '14px',
    maxWidth: '350px',
  }}
/>

    <App />
    </BrowserRouter>
  </StrictMode>,
)
