import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
