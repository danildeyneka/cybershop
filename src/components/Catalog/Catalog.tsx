import {FC, useEffect} from 'react'
import {Grid} from '@mui/material'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {setItems} from '../../redux/slices/CatalogSlice'
import {CatalogItem} from './CatalogItem'
import {Filters} from './Filters'
import {Loader} from '../../assets/svgs/loader'

export const Catalog: FC = () => {
    const {items, loading} = useAppSelector(state => state.catalog)
    const {awaiting} = useAppSelector(state => state.cart)
    const mappedItems = items?.map(item => <CatalogItem i={item} key={item.id}/>)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setItems())
    }, [])

    if (loading) return <div>Loading...</div> // add skeleton
    return (<>
        {awaiting && <Loader moveFromTopPx={220}/>}
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