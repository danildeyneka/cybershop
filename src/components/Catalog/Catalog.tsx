import {FC, useEffect} from 'react'
import {Box, Grid} from '@mui/material'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {setItems} from '../../redux/slices/CatalogSlice'
import {CatalogItem} from './CatalogItem'
import {Filters} from './Filters'
import {Loading} from '../../assets/svgs/loading'

export const Catalog: FC = () => {
    const {items, loading} = useAppSelector(state => state.catalog)
    const {adding} = useAppSelector(state => state.cart)
    const mappedItems = items?.map(item => <CatalogItem i={item} key={item.id}/>)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setItems())
    }, [])

    if (loading) return <div>Loading...</div> // add skeleton
    return (<>
        {adding && <Loading/>}
        <Grid container>
            <Grid item xs={2}>
                <Filters/>
            </Grid>
            <Grid item xs={8}>
                <Grid container spacing={5}>
                    {mappedItems}
                </Grid>
            </Grid>
        </Grid>
    </>)
}