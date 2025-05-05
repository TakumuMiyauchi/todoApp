import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateMenu from './pages/StateMenu'

import "./index.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
		<StateMenu />
  </StrictMode>,
)
