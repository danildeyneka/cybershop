import {FC} from 'react'
import {login} from '../../redux/slices/AuthSlice'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {useForm} from 'react-hook-form'
import {UsersDataType} from '../../@types/types'
import {Box, Button, Input, Paper, Typography} from '@mui/material'
import {ValidationError} from '../common/Error/ValidationError'
import {Loader} from '../common/Loader/loader'

export const Login: FC = () => {
    const dispatch = useAppDispatch()
    const {awaiting} = useAppSelector(state => state.auth)
    const {register, handleSubmit, formState: {errors}} = useForm<UsersDataType>()
    const error = (errors.password || errors.name)

    const onSubmit = (data: UsersDataType) => {
        dispatch(login(data))
    }

    return <Paper sx={{
        width: 300,
        margin: '0 auto',
        pb: 6,
        mt: 2
    }} variant="outlined">
        <Box component="form" sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative'
        }} onSubmit={handleSubmit(onSubmit)}>
            {awaiting && <Loader moveFromTopPx={-65} moveFromLeftPx={-50}/>}
            {error && <Typography sx={{position: 'absolute', top: 80, color: 'secondary.main'}}>* Required</Typography>}
            <Input type="text" placeholder="Name" {...register('name', {required: true})}
                   inputProps={{style: {textAlign: 'center'}}}/>
            {errors.name && <ValidationError widthInPx={182}/>}
            <Input type="password" placeholder="Password" {...register('password', {required: true})}
                   inputProps={{style: {textAlign: 'center'}}}/>
            {errors.password && <ValidationError widthInPx={182}/>}

            <Button type="submit" sx={{
                mt: 5,
                fontSize: 22,
                borderBottom: '4px solid',
                borderRadius: 0,
                lineHeight: 1.5
            }}>Login</Button>
        </Box>
    </Paper>
}