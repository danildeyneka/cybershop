import {FC, useEffect, useState} from 'react'
import {Box, Grid, Typography} from '@mui/material'
import {DatabaseType} from '../../@types/types'
import cartImg from '../../assets/images/cart.png'
import xButton from '../../assets/images/x-button.png'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {actions} from '../../redux/slices/CartSlice'

export const CatalogItem: FC<{ i: DatabaseType }> = ({i}) => {
    const {cart} = useAppSelector(state => state.cart)
    const added = cart.map(i => i.id).includes(i.id) // checking item in cart by its unique id
    const dispatch = useAppDispatch()
    const addToCart = (item: DatabaseType) => {
        dispatch(actions.addToCart(item))
    }
    const removeFromCart = (id: number) => {
        dispatch(actions.removeFromCart(id))
    }
    const imgStyle = {
        position: 'relative', width: 48, height: 48, bottom: 44, left: 48, cursor: 'pointer',
        '&:hover': {
            bottom: 50
        }
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
            {!added && <Box component="img" src={cartImg} alt="cart"
                     sx={imgStyle}
                     onClick={() => addToCart(i)}/>}
            {added && <Box component="img" src={xButton} alt="cart"
                           sx={imgStyle}
                           onClick={() => removeFromCart(i.id)}/>}
            {/*<Box component="img" src={cartImg} alt="cart"*/}
            {/*               sx={imgStyle}*/}
            {/*               onClick={() => addToCart(i)}/>*/}
        </Box>
    </Grid>
}