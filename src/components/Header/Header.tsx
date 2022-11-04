import {FC} from 'react'
import {AppBar, Box, Toolbar} from '@mui/material'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'

export const Header: FC = () => {

    return <AppBar component='nav' position='relative' sx={{mb: 4, bgcolor: 'primary'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-around'}}>
            <Box component={Link} to='admin' sx={{textDecoration: 'none', fontSize: 24}}>Admin</Box>
            <Link to='/'>
                <Box component='img' src={logo} alt='logo' sx={{width: 32, height: 32}}/>
            </Link>
            <Box component={Link} to='cart' sx={{textDecoration: 'none', fontSize: 24}}>Cart</Box>
        </Toolbar>
    </AppBar>
}