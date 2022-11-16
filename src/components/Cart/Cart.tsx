import {FC} from 'react'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {cartActions} from '../../redux/slices/CartSlice'
import {CartItem} from './CartItem'
import {Button, Grid, Typography} from '@mui/material'

export const Cart: FC = () => {
    const dispatch = useAppDispatch()
    const {cart} = useAppSelector(state => state.cart)
    const mappedCart = cart?.map(item => <CartItem i={item} key={item.id}/>)
    const totalPrice = cart?.reduce((acc, i) => acc + +i.price, 0)
    const totalDiscount = cart?.reduce((acc, i) => acc + ((+i.oldPrice! ?? +i.price) - +i.price), 0) // expression in braces needed to avoid negative outcome because of null case of some oldPrice values

    const clearCart = () => {
        dispatch(cartActions.clearCart())
    }

    if (cart?.length === 0) return <div style={{textAlign: 'center'}}>No items in cart</div>

    return <Grid container>
        <Grid item xs={8}>
            {mappedCart}
        </Grid>
        <Grid item>
            <Button onClick={clearCart} sx={{fontSize: 22}}>clear cart</Button>
            <Typography>Your discount is {totalDiscount} ₽</Typography><br/>
            <Typography>Total: {totalPrice} ₽ </Typography>
            <Button onClick={() => alert('Your order is placed')} sx={{fontSize: 22}}>Checkout</Button>
        </Grid>
    </Grid>
}