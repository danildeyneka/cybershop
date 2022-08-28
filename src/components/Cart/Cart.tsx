import {FC, useEffect} from 'react'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {API} from '../../api/api'
import {catalogActions} from '../../redux/slices/ShopSlice'
import {Card} from '../Card/Card'

export const Cart: FC = () => {
    const cart = useAppSelector(state => state.catalog.cart)
    const mappedCart = cart?.map(item => <Card i={item}/>)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const setData = async () => {
            const data = await API.getCart()
            dispatch(catalogActions.setCart(data))
        }
        setData()
    }, [])

    if (cart.length === 0) return <div>No items in cart</div>

    return <>
cart
        {mappedCart}
    </>
}