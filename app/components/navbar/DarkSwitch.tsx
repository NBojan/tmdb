"use client"
import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const savedTheme = localStorage.getItem("theme") || "light";

const DarkSwitch = () => {
    const [theme, setTheme] = useState(savedTheme);

    const handleTheme = () => {
        if(theme === "light") return setTheme("dark")
        else return setTheme("light");
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        if(theme === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark")
    }, [theme])

    return (  
        <button className="flex text-xl hover:text-amber-600 transition-colors" onClick={handleTheme}>
            {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
    );
}
 
export default DarkSwitch;