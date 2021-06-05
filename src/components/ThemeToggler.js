import React, { useContext } from 'react';
import ThemeContext from "../context/ThemeContext"


const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    return (
        <div
        // onClick={() => {
        //     setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
        // }}
        >
            <span>{themeMode === 'light' ? 'lights off' : 'lights on'}</span>
        </div>
    )
}
export default ThemeToggler;