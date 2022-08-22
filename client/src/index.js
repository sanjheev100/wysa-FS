import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import UserProvider from './context/userProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <UserProvider>
    <Router>
      <App />
    </Router>
  </UserProvider>
)
