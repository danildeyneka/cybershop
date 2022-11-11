import {FC, useEffect} from 'react'
import {Grid} from '@mui/material'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {Filters} from './Filters'
import {Item} from '../Item/Item'

export const Catalog: FC = () => {
    const {items, loading} = useAppSelector(state => state.catalog)
    const mappedItems = items?.map(item => <Grid item xs={2} key={item.id}>
        <Item i={item}/>
    </Grid>)
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     dispatch(setItems())
    // }, [])
    //
    // useEffect(()=>{},[mappedItems])

    if (loading) return <div>Loading...</div> // add skeleton
    return (
        <Grid container>
            <Grid item xs={2}>
                <Filters/>
            </Grid>
            <Grid item xs={8}>
                <Grid container spacing={4}>
                    {mappedItems}
                </Grid>
            </Grid>
        </Grid>
    )
}