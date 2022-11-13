import {FC} from 'react'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {actions, login} from '../../redux/slices/AuthSlice'
import {Box, Button, Input, Paper, TextField, Typography} from '@mui/material'
import {Login} from './Login'
import {useForm} from 'react-hook-form'
import {DatabaseType} from '../../@types/types'
import {addItem} from '../../redux/slices/CatalogSlice'

export const Admin: FC = () => {
    const {authorized} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm<DatabaseType>()
    const onSubmit = (data: DatabaseType) => {
        console.log(data)
        // dispatch(addItem(data))
    }
    const inputStyle = {
        width: 320,
        mt: 1
    }

    if (authorized) return <>
        <Button onClick={() => dispatch(actions.logout())}>LOGOUT</Button>
        <Paper sx={{width: 500, margin: '0 auto'}}>
            <Box component="form" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                 onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h2" sx={{fontSize: 32, mt: 1}}>Add new item</Typography>
                <Input type="number" value={+Date.now()} {...register('uniqueId')} sx={{display: 'none'}}/>
                <Input type="text" placeholder="Category" {...register('category', {required: true})}
                       inputProps={{style: {textAlign: 'center'}}} sx={inputStyle}/>
                <Input type="text" placeholder="Brand" {...register('brand', {required: true})}
                       inputProps={{style: {textAlign: 'center'}}} sx={inputStyle}/>
                <Input type="text" placeholder="Name" {...register('name', {required: true})}
                       inputProps={{style: {textAlign: 'center'}}} sx={inputStyle}/>
                <Input type="number" placeholder="Old price" {...register('oldPrice')}
                       inputProps={{style: {textAlign: 'center'}}} sx={inputStyle}/>
                <Input type="number" placeholder="Price" {...register('price', {required: true})}
                       inputProps={{style: {textAlign: 'center'}}} sx={inputStyle}/>
                <Input type="text" placeholder="Photo url" {...register('photo', {required: true})}
                       inputProps={{style: {textAlign: 'center'}}} sx={inputStyle}/>
                <TextField type="text" placeholder="Description" {...register('desc', {required: true})}
                           inputProps={{style: {textAlign: 'center'}}} sx={inputStyle} multiline/>
                <Box sx={{
                    mt: 5,
                    mb: 5
                }}>
                    <Button type="reset" sx={{
                        width: 150,
                        fontSize: 22,
                        border: '2px solid',
                        borderRadius: 3,
                        lineHeight: 1.5,
                        mr: 1
                    }}>Reset</Button>
                    <Button type="submit" sx={{
                        width: 150,
                        fontSize: 22,
                        border: '2px solid',
                        borderRadius: 3,
                        lineHeight: 1.5,
                        ml: 1
                    }}>Add</Button>
                </Box>
            </Box>
        </Paper>
    </>
    return <Login/>
}