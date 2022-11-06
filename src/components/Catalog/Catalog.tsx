import {FC, useEffect} from 'react'
import {Grid} from '@mui/material'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {setItems} from '../../redux/slices/CatalogSlice'
import {Card} from '../Card/Card'
import {Filters} from './Filters'

export const Catalog: FC = () => {
    const {items, loading} = useAppSelector(state => state.catalog)
    const mappedItems = items?.map(item => <Card i={item} key={item.id}/>)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setItems())
    }, [])

    if (loading) return <div>Loading...</div>
    return (
        <Grid container>
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