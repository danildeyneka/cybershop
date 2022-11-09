import {FC} from 'react'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {actions} from '../../redux/slices/CartSlice'
import {CartItem} from './CartItem'
import {Button, Grid, Typography} from '@mui/material'
import {Loader} from '../../assets/svgs/loader'

export const Cart: FC = () => {
    const {cart} = useAppSelector(state => state.cart)
    const mappedCart = cart?.map(item => <CartItem i={item} key={item.id}/>)
    const dispatch = useAppDispatch()
    const totalPrice = cart?.reduce((acc, i) => acc + i.price, 0)
    const totalDiscount = cart?.reduce((acc, i) => acc + ((i.oldPrice ?? i.price) - i.price), 0) // expression in braces needed to avoid negative outcome because of null case of some oldPrice values

    const clearCart = () => {
        dispatch(actions.clearCart())
    }
    // console.log(JSON.parse(localStorage.getItem('cart')))
    // useEffect(() => {
    // }, [mappedCart])

    if (cart?.length === 0) return <div>No items in cart</div>

    return <Grid container>
        <Grid item xs={8}>
            {mappedCart}
        </Grid>
        <Grid item>
            <Button onClick={clearCart}>clear cart</Button>
            <Typography>Your discount is {totalDiscount} ₽</Typography>
            <Typography> {totalPrice} ₽ </Typography>
        </Grid>
    </Grid>
}