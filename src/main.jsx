import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/search.css'
import './styles/form.css'
import './styles/dashboard.css'
import "./styles/login.css";
import "./styles/footer_nodes.css"
import App from './App.jsx'
import '@fontsource/jetbrains-mono';
import '@fontsource-variable/sora'; 
import '@fontsource-variable/anybody'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
