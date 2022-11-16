import {FC} from 'react'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {authActions} from '../../redux/slices/AuthSlice'
import {Box, Button, Input, MenuItem, Paper, TextField, Typography} from '@mui/material'
import {Login} from './Login'
import {useForm} from 'react-hook-form'
import {DatabaseType} from '../../@types/types'
import {addItem} from '../../redux/slices/CatalogSlice'
import {ValidationError} from '../common/Error/ValidationError'

export const Admin: FC = () => {
    const dispatch = useAppDispatch()
    const {authorized} = useAppSelector(state => state.auth)
    const {awaiting} = useAppSelector(state => state.catalog)
    const {register, handleSubmit, formState: {errors}, reset} = useForm<DatabaseType>()
    const error = (errors.name || errors.brand || errors.price || errors.desc || errors.photo)

    const onSubmit = (data: DatabaseType) => {
        dispatch(addItem(data))
        reset() // refresh date.now
    }
    const inputStyle = {
        width: 320,
        mt: 1
    }

    const addFake = () => {
        dispatch(addItem({
            'id': Date.now(),
            'category': 'keyboard',
            'brand': 'test1',
            'name': 'test2',
            'oldPrice': '4',
            'price': '6',
            'photo': 'test3',
            'desc': 'test4'
        }))
    }

    if (authorized) return <>
        <Button onClick={() => dispatch(authActions.logout())}>LOGOUT</Button>
        <Paper sx={{width: 500, margin: '0 auto'}}>
            <Box component="form" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                 onSubmit={handleSubmit(onSubmit)}>

                {/*only for your testing*/}
                <Button onClick={() => {
                    addFake()
                }}>add fake item fast</Button>
                {/*only for your testing*/}

                {error &&
                    <Typography sx={{position: 'absolute', top: 542, color: 'secondary.main'}}>* Required</Typography>}

                <Typography variant="h2" sx={{fontSize: 32, mb: 1}}>Add new item</Typography>
                <Input type="number" value={Date.now()} {...register('id')} sx={{display: 'none'}}/>
                <TextField select defaultValue="keyboard" {...register('category')}
                           style={inputStyle}>
                    <MenuItem value="keyboard">keyboard</MenuItem>
                    <MenuItem value="mouse">mouse</MenuItem>
                    <MenuItem value="headphones">headphones</MenuItem>
                </TextField>
                <Input type="text" placeholder="Brand" {...register('brand', {required: true})}
                       inputProps={{style: {textAlign: 'center'}}} sx={inputStyle}/>
                {errors.brand && <ValidationError widthInPx={320} moveRightInPx={160}/>}
                <Input type="text" placeholder="Name" {...register('name', {required: true})}
                       inputProps={{style: {textAlign: 'center'}}} sx={inputStyle}/>
                {errors.name && <ValidationError widthInPx={320} moveRightInPx={160}/>}
                <Input type="number" placeholder="Old price" {...register('oldPrice')}
                       inputProps={{style: {textAlign: 'center'}}} sx={inputStyle}/>
                <Input type="number" placeholder="Price" {...register('price', {required: true})}
                       inputProps={{style: {textAlign: 'center'}}} sx={inputStyle}/>
                {errors.price && <ValidationError widthInPx={320} moveRightInPx={160}/>}
                <Input type="text" placeholder="Photo url" {...register('photo', {required: true})}
                       inputProps={{style: {textAlign: 'center'}}} sx={inputStyle}/>
                {errors.photo && <ValidationError widthInPx={320} moveRightInPx={160}/>}
                <TextField type="text" placeholder="Description" {...register('desc', {required: true})}
                           inputProps={{style: {textAlign: 'center'}}} sx={inputStyle} multiline/>
                {errors.desc && <ValidationError widthInPx={320} moveRightInPx={160} moveBottomInPx={10}/>}
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
                    }} disabled={awaiting}>Add</Button>
                </Box>
            </Box>
        </Paper>
    </>

    return <Login/>
}