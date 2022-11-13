import {FC, memo, useEffect, useState} from 'react'
import {Grid} from '@mui/material'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {Filters} from './Filters'
import {Item} from '../Item/Item'
import {setItems} from '../../redux/slices/CatalogSlice'

export const Catalog: FC = memo(() => {
    const {items, loading} = useAppSelector(state => state.catalog)
    const {authorized} = useAppSelector(state => state.auth)
    const [adminMode, setAdminMode] = useState<boolean>(false)
    const mappedItems = items?.map(item => <Grid item xs={2} key={item.uniqueId}>
        <Item i={item} adminMode={adminMode}/>
    </Grid>)
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     dispatch(setItems())
    // }, [])
    //
    // useEffect(()=>{},[])

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
            <Grid item xs={2}>
                admin mode
                <button onClick={() => setAdminMode(prevState => !prevState)}>admin</button>
            </Grid>
        </Grid>
    )
})