import {FC, useEffect} from 'react'
import {getUsers} from '../../redux/slices/AuthSlice'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {actions} from '../../redux/slices/AuthSlice'
import {Button} from '@mui/material'
import {Login} from './Login'

export const Admin: FC = () => {
    const {authorized} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    // useEffect(()=>{
    //     dispatch(getUsers())
    // },[])
//react hook form

    if (!authorized) return <Login/>
    return <>
        <Button onClick={()=>dispatch(actions.logout())}>LOGOUT</Button>
    </>
}