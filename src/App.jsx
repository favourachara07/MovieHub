import { AllRoutes } from "./route/AllRoutes"
import { Header, Footer } from "./components"
import './App.css'
import { useState } from "react"

export const App = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") || false)

  return (
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <AllRoutes darkMode={darkMode}/>
      <Footer />
    </div>
  )
}
