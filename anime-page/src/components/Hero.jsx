import React, { useContext } from 'react'
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../context/Theme";

async function loadcss(currentTheme) {
    return await import(currentTheme);
}
const Hero = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const currentTheme = AppTheme[theme]
    loadcss(currentTheme)
    return (
        <div class="hero-bg" id="home">
            <div class="col-md-8 col-12 px-5 py-5">
                <h1 className="text-color">Start Your Anime Journey, <span class="hero-subtext">Anime, Manga and Movies
                    </span> With Watchghoul.com</h1>
                <div class="pt-4">
                    <a href="" class="hero-demo py-3 px-md-2 px-1 ">Request Demo</a>
                    <a onClick={() => {
                        setTheme(theme == "dark" ? "light" : "dark")
                    }
                    } href="" class="hero-register py-3 px-md-2 px-1  mx-3">Register Now</a>

                </div>
            </div>
        </div >
    )
}

export default Hero;
