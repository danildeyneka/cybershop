import {Dispatch, FC, SetStateAction, useState} from 'react'
import {Box, Button, Input, MenuItem, Paper, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import {buttonStyle} from '../../common/Button/ButtonStyle'
import {useAppSelector} from '../../../hooks/hooks'

type propsT = {
    setSearchParams: any
    searchQuery: string
    filterQuery: string
    adminMode: boolean
    setAdminMode: Dispatch<SetStateAction<boolean>>
}

export const Sidebar: FC<propsT> = ({
                                        setSearchParams,
                                        searchQuery,
                                        filterQuery,
                                        ...props
                                    }) => {
    const {authorized} = useAppSelector(state => state.auth)
    const [search, setSearch] = useState(searchQuery)
    const [filter, setFilter] = useState(filterQuery)

    const queryHandler = (e: any) => {
        e.preventDefault()
        const searchUrlQuery = e.target.search.value
        const filterUrlQuery = filter
        const params: { search?: string, filter?: string } = {}
        if (searchUrlQuery.length) params.search = searchUrlQuery

        if (filterUrlQuery === 'All') delete params.filter
        else if (filterUrlQuery.length) params.filter = filterUrlQuery
        setSearchParams(params)
    }

    return <Paper variant="outlined" sx={{m: 3, p: 5}}>
        <Box component="aside">
            <form onSubmit={queryHandler} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TextField select value={filter} sx={{width: 230, textAlign: 'center'}}>
                    <MenuItem value="All" onClick={() => setFilter('All')}>All</MenuItem>
                    <MenuItem value="keyboard" onClick={() => setFilter('keyboard')}>Keyboard</MenuItem>
                    <MenuItem value="mouse" onClick={() => setFilter('mouse')}>Mouse</MenuItem>
                    <MenuItem value="headphones" onClick={() => setFilter('headphones')}>Headphones</MenuItem>
                </TextField>
                <div>
                    <SearchIcon sx={{position: 'relative', top: 5, left: 25}}/>
                    <Input sx={{position: 'relative', width: 230, pl: 4, mr: 2, mt: 4, mb: 4}} type="search"
                           name="search"
                           placeholder="Search" value={search}
                           onChange={(e) => setSearch(e.target.value)}/></div>
                <Button variant="contained" type="submit" sx={buttonStyle}>Search</Button>
                {authorized &&
                    <Button variant="contained" sx={buttonStyle} style={{marginTop: 50}}
                            onClick={() => {
                                props.setAdminMode(prevState => !prevState)
                                if (!props.adminMode) alert('Please do not remove the actual items, you can play around with new-added items via admin panel')
                            }}>
                        Edit mode {props.adminMode ? 'on' : 'off'}</Button>}
            </form>
        </Box>
    </Paper>
}