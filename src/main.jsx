import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateTodo from './pages/StateTodo'

import "./index.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
		<StateTodo />
  </StrictMode>,
)
