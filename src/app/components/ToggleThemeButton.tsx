import { useTheme } from '@wits/next-themes'
import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export const ToggleThemeButton = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    const renderThemeChanger = () => {

        const currentTheme = theme === "system" ? theme : theme;

        if (currentTheme === "dark") {
            return (
                <FaSun className="text-yellow-500 dark:text-yellow-400 text-2xl cursor-pointer" role="button" onClick={() => setTheme('light')} />
            )
        }

        else {
            return (
                <FaMoon className="text-white dark:text-white text-2xl cursor-pointer" role="button" onClick={() => setTheme('dark')} />
            )
        }
    };
    return (
        <>
            {renderThemeChanger()}
        </>
    )
}
