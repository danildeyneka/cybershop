import {FC} from 'react'
import {Box, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import cartImg from '../../assets/images/cart.png'
import xButton from '../../assets/images/x-button.png'
import {DatabaseType} from '../../@types/types'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {actions} from '../../redux/slices/CartSlice'

type propsT = {
    i: DatabaseType
    singleItem?: boolean
}

export const Item: FC<propsT> = ({i, ...props}) => {
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

    return <Box sx={{textAlign: 'center'}}>
        <Link to={`/${props.singleItem ? '' : i.id}`}>
            <Box component="img" src={i.photo} alt={i.name}
                 sx={{
                     width: props.singleItem ? 230 : 170,
                     height: props.singleItem ? 230 : 170,
                     objectFit: 'contain'
                 }}/>
        </Link>
        <Typography sx={{height: 42}}>{i.brand} {i.name}</Typography>

        {props.singleItem && <Typography sx={{width: 300, margin: '0 auto'}}>{i.desc}</Typography>}

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
        {added && <Box component="img" src={xButton} alt="xButton"
                       sx={imgStyle}
                       onClick={() => removeFromCart(i.id)}/>}
    </Box>
}