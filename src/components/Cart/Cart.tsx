import {FC, useEffect} from 'react'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {setCart} from '../../redux/slices/CartSlice'
import {CartItem} from './CartItem'
import {Grid} from '@mui/material'
import {Loader} from '../../assets/svgs/loader'

export const Cart: FC = () => {
    const {cart, loading, awaiting} = useAppSelector(state => state.cart)
    const mappedCart = cart?.map(item => <CartItem i={item} key={item.id}/>)
    const dispatch = useAppDispatch()
    const totalPrice = cart?.reduce((acc, i) => acc + i.price, 0)
    const totalDiscount = cart?.reduce((acc, i) => acc - ((i.oldPrice ?? 0) - i.price), 0)

    useEffect(() => {
        dispatch(setCart())
    }, [])

    if (loading) return <div>Loading...</div>
    if (cart?.length === 0) return <div>No items in cart</div>

    return <Grid container>
        {awaiting && <Loader moveFromLeftPx={320}/>}
        <Grid item xs={8}>
            {mappedCart}
        </Grid>
        <Grid item>
            checkout <br/>
            скидка {totalDiscount} ₽<br/>
            итого {totalPrice} ₽
        </Grid>
    </Grid>
}