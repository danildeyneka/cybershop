import {FC} from 'react'
import {Footer} from './components/Footer/Footer'
import {Header} from './components/Header/Header'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Catalog} from './components/Catalog/Catalog'
import {Cart} from './components/Cart/Cart'
import {Favourites} from './components/Favoutires/Favourites'

export const App: FC = () => {

    return <>
        <Header/>
        <Routes>
            <Route path="/" element={<Catalog/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/favourites" element={<Favourites/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
        <Footer/>
    </>
}

export default App
