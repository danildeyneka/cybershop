import {FC, useEffect} from 'react'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {cartApi} from '../../api/api'
import {Card} from '../Card/Card'
// import {cartActions} from '../../redux/slices/CartSlice'

export const Cart: FC = () => {
    const cart = useAppSelector(state => state.cart.cart)
    const mappedCart = cart?.map(item => <Card i={item}/>)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const setData = async () => {
            const data = await cartApi.getCart()
            // dispatch(cartActions.setCart(data))
        }
        setData()
    }, [])

    if (cart.length === 0) return <div>No items in cart</div>

    return <>
cart
        {mappedCart}
    </>
}