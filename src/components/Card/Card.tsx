import {FC} from 'react'
import {Box, Grid, Paper, Typography} from '@mui/material'
import {DatabaseType} from '../../@types/types'
import cart from '../../assets/images/cart.png'
import heart from '../../assets/images/heart.png'

export const Card: FC<{ i: DatabaseType }> = ({i}) => {

    return <Grid item xs={2}>
        <Box sx={{textAlign: 'center'}}>
            <Box component="img" src={i.photo} alt={i.name} sx={{width: 170, height: 170, objectFit: 'contain'}}/>
            <Typography sx={{height: 42}}>{i.brand} {i.name}</Typography>
            <Typography sx={{
                textDecorationLine: 'line-through',
                height: 28,
                marginLeft: 7,
                color: 'red',
                marginTop: '4px'
            }}>{i.oldPrice}{i.oldPrice && '₽'}</Typography>
            <Typography>{i.price}₽</Typography>
            <Box component='img' src={cart} alt='cart' sx={{position: 'relative', bottom: 25, right: 40, cursor: 'pointer'}}/>
            <Box component='img' src={heart} alt='heart' sx={{width: 24, height: 24, position: 'relative', bottom: 25, left: 40, cursor: 'pointer'}}/>
        </Box>
    </Grid>
}

// добавить visibility hidden для цены старой и высоту нейму