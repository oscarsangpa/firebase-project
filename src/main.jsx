import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {RoutesProvider} from "./context/RoutesProvider"
import "./index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <RoutesProvider>
    <App />
  </RoutesProvider>,
)
