import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './pages/Login/Main'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
