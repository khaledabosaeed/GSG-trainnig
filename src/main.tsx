import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
// import App from './App.tsx'
import EcommercePage from './components/EcommercePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <EcommercePage />
  </StrictMode>,
)
