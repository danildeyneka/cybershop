import {FC} from 'react'
import {actions} from '../../redux/slices/AuthSlice'
import {useAppDispatch} from '../../hooks/hooks'

export const Login: FC = () => {
    const dispatch = useAppDispatch()

    return <>
        <button onClick={() => dispatch(actions.login({name: 'admin', password: 'admin'}))}> login first</button>
    </>
}