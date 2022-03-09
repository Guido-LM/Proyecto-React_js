import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
const App = () => {

    return (
            <>
                <NavBar/>
                <ItemListContainer titulo="¡Bienvenido!"/>
                <Footer/>
            </>)
}
export default App