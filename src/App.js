import React, { useState } from 'react'
import ThemeContext from "./context/ThemeContext"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"

export default () => {
  const themeHook = useState('dark')
  return (
    <ThemeContext.Provider value={themeHook} >
      <div>
        <Header />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  )
}
