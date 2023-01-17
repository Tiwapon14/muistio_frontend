import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './services/index.css'

let notes =[]

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode><App notes={notes}/></React.StrictMode>
    
    )