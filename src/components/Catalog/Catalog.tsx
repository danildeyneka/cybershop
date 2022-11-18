import {FC, memo, useState} from 'react'
import {Grid} from '@mui/material'
import {useAppSelector} from '../../hooks/hooks'
import {Item} from '../common/Item/Item'
import {useSearchParams} from 'react-router-dom'
import {Sidebar} from './Sidebar/Sidebar'
import ContentLoader from 'react-content-loader'

export const Catalog: FC = memo(() => {
    const {items, loading} = useAppSelector(state => state.catalog)
    const [adminMode, setAdminMode] = useState<boolean>(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const searchQuery = searchParams.get('search')?.toLowerCase() || ''
    const filterQuery = searchParams.get('filter') || 'All'

    const mappedItems = items?.filter(i => (i.name + ' ' + i.brand + ' ' + i.desc).toLowerCase().includes(searchQuery))
        .filter(i => (i.category === (filterQuery === 'All' ? i.category : filterQuery)))
        .map(item =>
            <Grid item xs={2} key={item.id}>
                <Item i={item} adminMode={adminMode}/>
            </Grid>)

    const preloader = [...Array(10)].map((i, index) => <ContentLoader key={index}
                                                                      speed={0.7}
                                                                      width={218}
                                                                      height={353}
                                                                      viewBox="0 0 186 321"
                                                                      backgroundColor="#f3f3f3"
                                                                      foregroundColor="#ecebeb"
    >
        <rect x="26" y="26" rx="0" ry="0" width="170" height="160"/>
        <rect x="43" y="190" rx="4" ry="4" width="129" height="16"/>
        <rect x="43" y="212" rx="4" ry="4" width="129" height="16"/>
        <rect x="50" y="234" rx="4" ry="4" width="61" height="16"/>
        <rect x="65" y="255" rx="4" ry="4" width="61" height="16"/>
        <rect x="132" y="238" rx="5" ry="5" width="38" height="38"/>
    </ContentLoader>)

    return <Grid container>
        <Grid item xs={3.2}>
            <Sidebar setSearchParams={setSearchParams} searchQuery={searchQuery} filterQuery={filterQuery}
                     adminMode={adminMode} setAdminMode={setAdminMode}/>
        </Grid>
        <Grid item xs={8}>
            <Grid container spacing={4}>
                {loading ?
                    preloader :
                    mappedItems}
            </Grid>
        </Grid>
    </Grid>
})