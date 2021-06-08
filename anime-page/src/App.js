import React, { useState } from 'react'

import Navbar from './components/Navbar'
import Purchase from './components/Purchase'
import Info from './components/Info'
import Hero from './components/Hero'
import Features from './components/Features'
import Course from './components/Course'
import ThemeContext from "../src/context/ThemeContext"
import "./dark.css"
function App() {
  const themeHook = useState("light")
  return (
    <div className="App">
      <section>
        <ThemeContext.Provider value={themeHook}>
          <Navbar />
          <Hero />
          <Info />
          <Course />
          <Features />
          <Purchase />
        </ThemeContext.Provider>
      </section>
    </div>
  );
}

export default App;
