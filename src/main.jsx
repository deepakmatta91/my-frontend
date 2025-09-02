import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import App1 from './tasksport/App1'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <App1/>
  </StrictMode>,
)
