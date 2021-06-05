import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';
import AppTheme from '../colors'
const HeroSection = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    const [themeMode, setThemeMode] = useContext(ThemeContext);


    return (
        <div
            style={{
                padding: "1rem",
                backgroundColor: `${currentTheme.backgroundColor}`,
                color: `${currentTheme.textColor}`,
                textAlign: "center",
            }}
        >
            <h1>Context API Theme Switcher</h1>
            <p>It is a basic react app</p>
            <button style={{
                backgroundColor: "#25ae60",
                padding: "10px 150px",
                fontSize: "20px",
                color: "#fff",
                border: `${currentTheme.border}`
            }} onClick={() => {
                setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
            }} >Click Me</button>
        </div>
    )
}

export default HeroSection;
