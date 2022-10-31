import {FC, useEffect} from 'react'
import {Grid} from '@mui/material'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {API} from '../../api/api'
import {catalogActions} from '../../redux/slices/CatalogSlice'
import {Card} from '../Card/Card'
import {Filters} from './Filters/Filters'

export const Catalog: FC = () => {
    const items = useAppSelector(state => state.catalog.items)
    const mappedItems = items?.map(item => <Card i={item} key={item.id}/>)
    const dispatch = useAppDispatch()

    useEffect(() => {
        // const setData = async () => {
        //     const data = await API.getItems()
        //     dispatch(catalogActions.setItems(data))
        // }
        // setData() // все ок работает тест async-thunk
    }, [])

    if (items.length === 0) return <div>Loading...</div>
    return (
        <Grid container>
            <Grid item xs={1}/>
            <Grid item xs={2}>
                <Filters/>
            </Grid>
            <Grid item xs={8}>
                <Grid container spacing={5}>
                    {mappedItems}
                </Grid>
            </Grid>
        </Grid>)
}