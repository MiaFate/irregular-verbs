import React from 'react'
import { NavBar } from './components/NavBar'
import MainGrid from './components/MainGrid'
import { Footer } from './components/Footer'

const Home = () => {
    return (
        <main className='max-h-full flex flex-col'>
            <header >
                <NavBar />
            </header>
            <div className="grow overflow-auto">
                <MainGrid />
            </div>
            <footer>
                <Footer />
            </footer>
        </main>
    )
}

export default Home;