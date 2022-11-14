import {FC} from 'react'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {cartActions} from '../../redux/slices/CartSlice'
import {CartItem} from './CartItem'
import {Button, Grid, Typography} from '@mui/material'

export const Cart: FC = () => {
    const {cart} = useAppSelector(state => state.cart)
    const mappedCart = cart?.map(item => <CartItem i={item} key={item.id}/>)
    console.log(mappedCart)
    const dispatch = useAppDispatch()
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
            <Button onClick={clearCart}>clear cart</Button>
            <Typography>Your discount is {totalDiscount} ₽</Typography>
            <Typography> {totalPrice} ₽ </Typography>
        </Grid>
    </Grid>
}