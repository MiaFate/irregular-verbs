
import MainGrid from "./components/MainGrid";
import { NavBar } from "./components/NavBar";

export default function Home() {

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