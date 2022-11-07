import {FC, useEffect} from 'react'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {setCart} from '../../redux/slices/CartSlice'
import {CartItem} from './CartItem'
import {Grid} from '@mui/material'
import {Loading} from '../../assets/svgs/loading'

export const Cart: FC = () => {
    const {cart, loading, removing} = useAppSelector(state => state.cart)
    const mappedCart = cart?.map(item => <CartItem i={item} key={item.id}/>)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setCart())
    }, [])

    if (loading) return <div>Loading...</div>
    if (cart?.length === 0) return <div>No items in cart</div>

    return <Grid container>
        <Grid item xs={8}>
            {mappedCart}
        </Grid>
        <Grid item>
            checkout
            {removing && <Loading/>}
        </Grid>
    </Grid>
}