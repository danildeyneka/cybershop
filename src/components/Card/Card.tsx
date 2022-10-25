import {FC} from 'react'
import {Grid, Paper, Typography} from '@mui/material'
import {DatabaseType} from '../../@types/types'
import './Card.scss'

export const Card: FC<{ i: DatabaseType }> = ({i}) => {

    return <Grid item xs={2}>
        <img className="img" src={i.photo} alt={i.name}/>
        <Typography>{i.brand} {i.name}</Typography>
        <Paper>{i.oldPrice}</Paper>
        <Paper>{i.price}</Paper>
    </Grid>
}

// добавить visibility hidden для цены старой и высоту нейму