"use client"
import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContextValues {
    query: string;
    setQuery: (query: string) => void;
}

const initialGlobalValue: GlobalContextValues = {
    query: "",
    setQuery: () => { },
}

export const globalContext = createContext<GlobalContextValues>(initialGlobalValue);
export const useGlobalContext = () => useContext(globalContext);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [query, setQuery] = useState(initialGlobalValue.query);
    return (
        <globalContext.Provider value={{
            query,
            setQuery,
        }}>
            {children}
        </globalContext.Provider>
    )
}