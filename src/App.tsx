import {FC, useEffect} from 'react'
import {Footer} from './components/Footer/Footer'
import {Header} from './components/Header/Header'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Catalog} from './components/Catalog/Catalog'
import {Cart} from './components/Cart/Cart'
import {Favourites} from './components/Favoutires/Favourites'
import {API} from './api/api'
import {catalogActions} from './redux/slices/CatalogSlice'
import {useAppDispatch} from './hooks/hooks'

export const App: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        const setData = async () => {
            const data = await API.getData()
            dispatch(catalogActions.setItems(data))
        }
        setData()
    }, [])

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
