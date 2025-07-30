import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import { GitHubProvider } from './context/GitHubUserContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GitHubProvider>
      <App />
    </GitHubProvider>
  </StrictMode>,
)
