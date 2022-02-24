import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
const App = () => {

    return (
            <>
                <NavBar/>
                <ItemListContainer titulo="¡Bienvenido!" items="Productos"/>
                <Footer/>
            </>)
}
export default App