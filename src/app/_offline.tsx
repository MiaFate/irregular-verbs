"use client"
import { MainGrid } from "./components/MainGrid";

export default function Home() {

    return (
        <>
            <header className="flex-row place-content-center text-center">
                <h1 className="font-extrabold p-10 text-3xl">Irregular Verbs List</h1>
            </header>
            <main >
                <MainGrid />
            </main>
        </>

    )
}