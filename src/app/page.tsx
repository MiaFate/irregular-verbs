import { NavBar } from './components/NavBar'
import { MainGrid } from './components/MainGrid'
import { Footer } from './components/Footer'
import { SearchBox } from './components/SearchBox'

const Home = () => {
    return (
        <>
            {/*limita el alto de la pagina al tamaño del body, el cual tiene un height de 100vh y margin 0 */}
            <SearchBox placeholder='Search Verbs' />
            <div className="grow overflow-auto mb-10">{/*contenedor principal el cual tomaralo que sobre del header y footer y generara scroll si tiene overflow */}
                <MainGrid />
            </div>
        </>
    )
}

export default Home;