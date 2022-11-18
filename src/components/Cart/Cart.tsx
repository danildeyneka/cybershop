import {FC} from 'react'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {cartActions} from '../../redux/slices/CartSlice'
import {CartItem} from './CartItem'
import {Button, Grid, Link, Paper, Typography} from '@mui/material'
import {buttonStyle} from '../common/Button/ButtonStyle'

export const Cart: FC = () => {
    const dispatch = useAppDispatch()
    const {cart} = useAppSelector(state => state.cart)

    const mappedCart = cart?.map(item => <CartItem i={item} key={item.id}/>)
    const totalPrice = cart?.reduce((acc, i) => acc + +i.price, 0)
    const orderPlaced = cart.map(i => ` ${i.brand} ${i.name} for ${i.price} ₽`)
    const totalDiscount = cart?.reduce((acc, i) => acc + ((((i.oldPrice! === '') || (i.oldPrice! === null)) ? +i.price : +i.oldPrice!) - +i.price), 0)
    // expression in braces needed to avoid negative outcome because of unset oldPrice values

    const clearCart = () => {
        dispatch(cartActions.clearCart())
    }

    if (cart?.length === 0) return <div style={{textAlign: 'center', fontSize: 20}}>
        <span>No items in cart</span>
        <Link href="/" sx={{textDecoration: 'none', color: 'primary.dark', display: 'block', mt: 1}}>Find some?</Link>
    </div>

    return <Grid container>
        <Grid item xs={8}>
            {mappedCart}
        </Grid>
        <Grid item>
            <Paper variant="outlined"
                   sx={{width: 300, height: 300, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Button onClick={clearCart} variant="contained" sx={buttonStyle}
                        style={{fontSize: 20, marginTop: 30, marginBottom: 20}}>clear cart</Button>
                <Typography>Your discount is {totalDiscount} ₽</Typography><br/>
                <Typography>Total: {totalPrice} ₽ </Typography>
                <Button
                    onClick={() => alert(`Your order is placed, containing: ${orderPlaced}. Total price: ${totalPrice}`)}
                    variant="contained" sx={buttonStyle} style={{fontSize: 20, marginTop: 20}}>Checkout</Button>
            </Paper>
        </Grid>
    </Grid>
}