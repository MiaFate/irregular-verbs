
'use client'
import { useTheme } from "@wits/next-themes";
import MainGrid from "./components/MainGrid";
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
import { NavBar } from "./components/NavBar";

export default function Home() {
    // const { theme, setTheme } = useTheme()
    // const [mounted, setMounted] = useState(false)

    // // useEffect only runs on the client, so now we can safely show the UI
    // useEffect(() => {
    //     setMounted(true)
    // }, [])

    // if (!mounted) {
    //     return null
    // }
    // const renderThemeChanger = () => {

    //     const currentTheme = theme === "system" ? theme : theme;

    //     if (currentTheme === "dark") {
    //         return (
    //             <FaSun className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
    //         )
    //     }

    //     else {
    //         return (
    //             <FaMoon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
    //         )
    //     }
    // };

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main >
                <div className="flex flex-row place-content-center text-center">
                    <h1 className="font-extrabold p-10 text-3xl select-none">Irregular Verbs List</h1>
                </div>
                <MainGrid />
            </main>
        </>

    )
}