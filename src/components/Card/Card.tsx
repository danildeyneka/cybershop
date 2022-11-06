import {FC} from 'react'
import {Box, Grid, Typography} from '@mui/material'
import {DatabaseType} from '../../@types/types'
import cart from '../../assets/images/cart.png'
import {useAppDispatch} from '../../hooks/hooks'
import {addCart} from '../../redux/slices/CartSlice'

export const Card: FC<{ i: DatabaseType }> = ({i}) => {
    const dispatch = useAppDispatch()
    const addToCart = (item: DatabaseType) => {
        dispatch(addCart(item))
    }

    return <Grid item xs={2} sx={{}}>
        <Box sx={{textAlign: 'center'}}>
            <Box component="img" src={i.photo} alt={i.name} sx={{width: 170, height: 170, objectFit: 'contain'}}/>
            <Typography sx={{height: 42}}>{i.brand} {i.name}</Typography>
            <Typography sx={{
                textDecorationLine: 'line-through',
                height: 24,
                marginRight: 8,
                color: 'secondary.main',
                marginTop: '5px'
            }}>{i.oldPrice}{i.oldPrice && '₽'}</Typography>
            <Typography sx={{marginRight: 3}}>{i.price}₽</Typography>
            <Box component="img" src={cart} alt="cart"
                 sx={{position: 'relative', width: 48, height: 48, bottom: 44, left: 48, cursor: 'pointer'}}
                 onClick={() => addToCart(i)}/>
        </Box>
    </Grid>
}