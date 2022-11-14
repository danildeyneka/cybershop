import {FC} from 'react'
import {DatabaseType} from '../../@types/types'
import {Box, Typography} from '@mui/material'
import {useAppDispatch} from '../../hooks/hooks'
import {cartActions} from '../../redux/slices/CartSlice'
import xButton from '../../assets/images/x-button.png'
import {Link} from 'react-router-dom'

export const CartItem: FC<{ i: DatabaseType }> = ({i}) => {
    const dispatch = useAppDispatch()
    const removeFromCart = (id: number) => {
        dispatch(cartActions.removeFromCart(+id))
    }

    return <Box sx={{textAlign: 'center'}}>
        <Link to={`/${i.id}`}>
            <Box component="img"
                 src={i.photo.endsWith('.webp') ? i.photo : 'https://img.icons8.com/ios/50/000000/new-product.png'}
                 alt={i.name} sx={{width: 120, height: 120, objectFit: 'contain'}}/>
        </Link>
        <Typography sx={{height: 32}}>{i.brand} {i.name}</Typography>
        <Typography sx={{fontSize: 20, textDecoration: 'underline', color: 'secondary.main'}}>{i.price}₽</Typography>
        <Box component="img" src={xButton} alt="remove"
             sx={{position: 'relative', width: 55, height: 55, bottom: 133, left: 248, cursor: 'pointer'}}
             onClick={() => removeFromCart(+i.id)}/>
    </Box>
}