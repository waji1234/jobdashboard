import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto'
import '@fontsource/inter'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
