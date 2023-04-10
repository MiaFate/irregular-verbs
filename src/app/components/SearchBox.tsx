"use client"
import { useState } from "react";
import { useGlobalContext } from "../context/context";

interface SearchBoxProps {
    placeholder: string;
}

export const SearchBox = ({ placeholder }: SearchBoxProps) => {
    const { setQuery } = useGlobalContext();

    const handleChange = (e: React.ChangeEvent) => {
        const { value } = e.target as HTMLInputElement;
        const input = value.toLowerCase();
        setQuery(input);

    };

    return (
        <div className="flex flex-row justify-center pt-5 pb-5">
            <input className="shadow appearance-none border border-gray-400 rounded m-auto py-2 px-3 text-black dark:text-white leading-tight focus:outline-none focus:shadow-outline" type="text" id="searchBox" placeholder={placeholder} onChange={handleChange} ></input>
        </div>
    )
}