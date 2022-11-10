import {FC} from 'react'
import {AppBar, Box, Toolbar, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {useAppSelector} from '../../hooks/hooks'

export const Header: FC = () => {
    const {cart} = useAppSelector(state => state.cart)
    const itemsInCart = cart.length

    return <AppBar component="nav" position="relative" sx={{mb: 4, bgcolor: 'primary'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-around'}}>
            <Box component={Link} to="admin"
                 sx={{textDecoration: 'none', fontSize: 24, color: 'primary.dark'}}>Admin</Box>
            <Link to="/">
                <Box component="img" src={logo} alt="logo" sx={{width: 32, height: 32}}/>
            </Link>
            <Box component={Link} to="cart"
                 sx={{textDecoration: 'none', fontSize: 24, color: 'primary.dark', width: 70}}>Cart
                <Typography sx={{
                    display: 'inline-block',
                    position: 'relative',
                    left: 5,
                    bottom: 12
                }}>{itemsInCart !== 0 ? itemsInCart : ''}</Typography>
            </Box>
        </Toolbar>
    </AppBar>
}