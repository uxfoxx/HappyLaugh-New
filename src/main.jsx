import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log('Starting React application...')

// Ensure DOM is ready
const initApp = () => {
  const rootElement = document.getElementById('root')
  
  if (!rootElement) {
    console.error('Root element not found!')
    return
  }

  console.log('Root element found, creating React root...')
  
  try {
    const root = ReactDOM.createRoot(rootElement)
    console.log('React root created successfully')
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
    console.log('App rendered successfully')
  } catch (error) {
    console.error('Error rendering app:', error)
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
        <h1>Application Error</h1>
        <p>There was an error loading the application.</p>
        <p style="color: red; font-family: monospace;">${error.message}</p>
      </div>
    `
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp)
} else {
  initApp()
}