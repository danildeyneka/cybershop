import {FC, useEffect} from 'react'
import {Footer} from './components/Footer/Footer'
import {Header} from './components/Header/Header'
import {Catalog} from './components/Catalog/Catalog'
import {Cart} from './components/Cart/Cart'
import {Admin} from './components/Admin/Admin'
import {SingleItem} from './components/Catalog/SingleItem/SingleItem'
import {Navigate, Route, Routes} from 'react-router-dom'
import {setItems} from './redux/slices/CatalogSlice'
import {useAppDispatch, useAppSelector} from './hooks/hooks'

export const App: FC = () => {
    const dispatch = useAppDispatch()
    // const {rerender} = useAppSelector(state => state.catalog)

    useEffect(()=>{
        dispatch(setItems())
    },[])

    return <>
        <Header/>
        <main>
            <Routes>
                <Route path="/" element={<Catalog/>}/>
                <Route path=":id" element={<SingleItem/>}/>
                <Route path="cart" element={<Cart/>}/>
                <Route path="admin" element={<Admin/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </main>
        <Footer/>
    </>
}

export default App
