import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { JobContextProvider } from './contexts/jobContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobContextProvider>
    <App />
    </JobContextProvider>
  </StrictMode>,
)
