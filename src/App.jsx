import './App.css'
import Weather from './Weather'
import Header from './Header'
import Contact from './Contact'
import AboutUs from './AboutUs'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'

function App(props) {
  const [darkMode, setDarkMode] = useState(true);

  // getting dark mode prop from the header component
  function getDarkMode(isDarkMode) {
    setDarkMode(isDarkMode);
  }


  return (
    <Router>
      <div style={{ backgroundColor: darkMode ? "rgb(11, 31, 75)" : "rgb(247, 247, 247)" }}>
        <Header getDarkMode={getDarkMode} />
        <Routes>
          <Route path="/" element={<Weather darkMode={darkMode} />} />
          <Route path="/Contact" element={<Contact darkMode={darkMode} />} />
          <Route path="/AboutUs" element={<AboutUs darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
