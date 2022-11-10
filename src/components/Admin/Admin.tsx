import {FC} from 'react'
import {getUsers} from '../../redux/slices/AuthSlice'
import {useAppDispatch} from '../../hooks/hooks'

export const Admin: FC = () => {
    const dispatch = useAppDispatch()

    return <>
        <button onClick={()=>dispatch(getUsers())}>sdaas</button>
    </>
}