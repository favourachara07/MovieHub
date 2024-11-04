import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"
import { App } from './App'
import { ScrollToTop } from './components'
import './index.css'
import { ProgramProvider } from './context/ProgramContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <ProgramProvider>
        <App />
      </ProgramProvider>
    </Router>
  </React.StrictMode>,
)
