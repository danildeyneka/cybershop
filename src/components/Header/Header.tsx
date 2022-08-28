import {FC} from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material'
import './Header.scss'

export const Header: FC = () => {

    return <AppBar className='header' position='relative'>
        <Toolbar>
            <Typography color='inherit'>header</Typography>
        </Toolbar>
    </AppBar>
}