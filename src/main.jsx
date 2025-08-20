import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Add error handling and debugging
console.log('main.jsx loaded');
console.log('React:', typeof React !== 'undefined');
console.log('ReactDOM:', typeof createRoot !== 'undefined');

const rootElement = document.getElementById('root');
console.log('Root element found:', rootElement !== null);

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    console.log('Root created successfully');
    
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    console.log('App rendered successfully');
  } catch (error) {
    console.error('Error rendering app:', error);
    // Fallback content
    rootElement.innerHTML = '<div style="padding: 20px; text-align: center;"><h1>Loading Error</h1><p>Please check the console for details.</p></div>';
  }
} else {
  console.error('Root element not found!');
}