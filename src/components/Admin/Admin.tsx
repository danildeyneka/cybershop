import {FC} from 'react'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {actions} from '../../redux/slices/AuthSlice'
import {Button} from '@mui/material'
import {Login} from './Login'

export const Admin: FC = () => {
    const {authorized} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    if (authorized) return <>
        <Button onClick={() => dispatch(actions.logout())}>LOGOUT</Button>
    </>
    return <Login/>
}