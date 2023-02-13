import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './About'
import $ from "jquery"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import AboutMe from './AboutMe'
import Contact from './Contact'
import Blog from './Blog'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
