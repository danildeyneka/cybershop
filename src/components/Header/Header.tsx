import {FC} from 'react'
import {AppBar, Button, Toolbar, Typography} from '@mui/material'
import './Header.scss'
import {Link} from 'react-router-dom'

export const Header: FC = () => {

    return <AppBar className='header' position='relative'>
        <Toolbar>
            <Typography><Link to='/'>catalog</Link></Typography>
            <Button><Link to='admin'>admin</Link></Button>
            <Button><Link to='cart'>cart</Link></Button>
            <Button><Link to='favourites'>favourites</Link></Button>
        </Toolbar>
    </AppBar>
}