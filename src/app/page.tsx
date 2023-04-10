import { NavBar } from './components/NavBar'
import { MainGrid } from './components/MainGrid'
import { Footer } from './components/Footer'
import { SearchBox } from './components/SearchBox'

const Home = () => {
    return (
        <main className='max-h-full flex flex-col'> {/*limita el alto de la pagina al tamaño del body, el cual tiene un height de 100vh y margin 0 */}
            <header >
                <NavBar />
                <SearchBox placeholder='Search Verbs' />
            </header>
            <div className="grow overflow-auto mb-10">{/*contenedor principal el cual tomaralo que sobre del header y footer y generara scroll si tiene overflow */}
                <MainGrid />
            </div>
            <footer>
                <Footer />
            </footer>
        </main>
    )
}

export default Home;