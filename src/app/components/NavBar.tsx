"use client"
import { Transition } from "@headlessui/react"
import { useTheme } from "@wits/next-themes";
import Link from "next/link"
import { useEffect, useState } from "react";
import { ToggleThemeButton } from "./ToggleThemeButton";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-zinc-800 dark:bg-zinc-900 sticky top-0">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-16">
                    <div className="flex grow items-center">
                        <h1 className="font-extrabold p-4 text-white md:text-3xl select-none">Irregular Verbs List</h1>
                        {/* <div className="flex-shrink-0">
                            <img
                                className="h-8 w-8"
                                src='https://www.svgrepo.com/show/276264/pokeball-pokemon.svg'
                                alt="pokeball"
                            />
                        </div> */}

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-4">
                                {/* <Link href="/" className="text-white hover:bg-gray-600 hover:dark:bg-gray-700 focus:ring focus:ring-rose-400 focus:dark:ring-violet-300 px-3 py-2 rounded-md text-sm font-medium">
                                    Home
                                </Link>
                                <Link href='/game' className="text-white dark:text-gray-300 hover:bg-gray-600 hover:dark:bg-gray-700 hover:dark:text-white focus:ring focus:ring-rose-400 focus:dark:ring-violet-300 px-3 py-2 rounded-md text-sm font-medium">
                                    Game
                                </Link> */}

                                {/*
                                <Link href="#" className="text-white dark:text-gray-300 hover:bg-blue-600 hover:dark:bg-gray-700 hover:dark:text-white focus:ring focus:ring-rose-400 focus:dark:ring-violet-300 px-3 py-2 rounded-md text-sm font-medium">
                                    My Profile
                                </Link> */}

                            </div>

                        </div>
                    </div>

                    <div className="mr-4 flex md:hidden">
                        <ToggleThemeButton />
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-zinc-800 dark:bg-zinc-900 inline-flex items-center justify-center p-2 rounded-md text-white dark:text-gray-400 hover:text-white hover:bg-gray-800 hover:dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* <div className="items-center hidden md:block text-white" >
                        {user.displayName ? user.displayName : user.email}
                    </div> */}

                    <div className="items-center hidden md:block">
                        <Link href="/" className="text-white hover:bg-gray-600 hover:dark:bg-gray-700 focus:ring focus:ring-rose-400 focus:dark:ring-violet-300 px-3 py-2 rounded-md text-sm font-medium">
                            Home
                        </Link>
                        <Link href='/game' className="text-white dark:text-gray-300 hover:bg-gray-600 hover:dark:bg-gray-700 hover:dark:text-white focus:ring focus:ring-rose-400 focus:dark:ring-violet-300 px-3 py-2 rounded-md text-sm font-medium">
                            Game
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <ToggleThemeButton />
                    </div>

                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref-setter={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                            <Link href="/" className="text-white hover:bg-gray-700 hover:dark:bg-gray-600  block px-3 py-2 rounded-md text-base font-medium">
                                Home
                            </Link>

                            <Link href="/game" className="text-gray-300 hover:bg-gray-700 hover:dark:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Game
                            </Link>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    )
}
