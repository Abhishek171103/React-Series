import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './Redux/Store.js'          // import store from Store.js
import { Provider } from 'react-redux'            // to connect react with redux

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>                  {/* wrap App with Provider and pass store as a prop */} 
    <App />
  </Provider>
  </StrictMode>,
)
