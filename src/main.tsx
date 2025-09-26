import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error('Failed to find root element');
} else {
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log('Duniya Rides app loaded successfully');
  } catch (error) {
    console.error('Failed to render app:', error);
    // Fallback: show basic content
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif; text-align: center;">
        <h1>Duniya Rides</h1>
        <p>India's Most Trusted Trip Planner</p>
        <p>Website is loading... Please refresh if you see this message.</p>
        <a href="https://wa.me/919876543210" style="display: inline-block; padding: 10px 20px; background: #25d366; color: white; text-decoration: none; border-radius: 5px; margin-top: 10px;">
          Contact on WhatsApp
        </a>
      </div>
    `;
  }
}
