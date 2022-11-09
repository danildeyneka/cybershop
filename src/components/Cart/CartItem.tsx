import {FC} from 'react'
import {DatabaseType} from '../../@types/types'
import {Box, Typography} from '@mui/material'
import {useAppDispatch} from '../../hooks/hooks'
import {actions} from '../../redux/slices/CartSlice'
import xButton from '../../assets/images/x-button.png'

export const CartItem: FC<{ i: DatabaseType }> = ({i}) => {
    const dispatch = useAppDispatch()
    const removeFromCart = (id: number) => {
        dispatch(actions.removeFromCart(id))
    }

    return <Box sx={{textAlign: 'center'}}>
        <Box component="img" src={i.photo} alt={i.name} sx={{width: 120, height: 120, objectFit: 'contain'}}/>
        <Typography sx={{height: 32}}>{i.brand} {i.name}</Typography>
        <Typography sx={{fontSize: 20, textDecoration: 'underline', color: 'secondary.main'}}>{i.price}₽</Typography>
        <Box component="img" src={xButton} alt="remove"
             sx={{position: 'relative', width: 55, height: 55, bottom: 133, left: 248, cursor: 'pointer'}}
             onClick={() => removeFromCart(i.id)}/>
    </Box>
}