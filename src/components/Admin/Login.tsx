import {FC} from 'react'
import {login} from '../../redux/slices/AuthSlice'
import {useAppDispatch} from '../../hooks/hooks'
import {useForm} from 'react-hook-form'
import {UsersDataType} from '../../@types/types'
import {Box, Button, Input, Paper, Typography} from '@mui/material'

const Error: FC = () => {
    return <Box sx={{
        position: 'relative',
        right: 88,
        bottom: 20,
        // display: 'block',
        color: 'secondary.main',
        '&::after': {
            content: '""',
            position: 'absolute',
            display: 'block',
            height: '2px',
            width: 182,
            backgroundColor: 'secondary.main',
            border: '1px',
        }
    }}>*</Box>
}

export const Login: FC = () => {
    const dispatch = useAppDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm<UsersDataType>()
    const onSubmit = (data: UsersDataType) => {
        dispatch(login(data))
    }
    const error = (errors.password || errors.name)

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
            alignItems: 'center'
        }} onSubmit={handleSubmit(onSubmit)}>
            {error && <Typography sx={{position: 'absolute', top: 280, color: 'secondary.main'}}>* Required</Typography>}
            <Input type="text" placeholder="Name" {...register('name', {required: true})}
                   inputProps={{style: {textAlign: 'center'}}}/>
            {error && <Error/>}
            <Input type="password" placeholder="Password" {...register('password', {required: true})}
                   inputProps={{style: {textAlign: 'center'}}}/>
            {error && <Error/>}

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