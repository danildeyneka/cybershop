import {FC, useState} from 'react'
import {Box, Button, Input, MenuItem, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export const Sidebar: FC<{ setSearchParams: any, searchQuery: string, filterQuery: string }> = ({
                                                                                                    setSearchParams,
                                                                                                    searchQuery,
                                                                                                    filterQuery
                                                                                                }) => {
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

    return <Box component="aside" sx={{marginLeft: 5}}>
        <form onSubmit={queryHandler}>
            <div>
                <TextField select value={filter}>
                    <MenuItem value="All" onClick={() => setFilter('All')}>All</MenuItem>
                    <MenuItem value="keyboard" onClick={() => setFilter('keyboard')}>Keyboard</MenuItem>
                    <MenuItem value="mouse" onClick={() => setFilter('mouse')}>Mouse</MenuItem>
                    <MenuItem value="headphones" onClick={() => setFilter('headphones')}>Headphones</MenuItem>
                </TextField>
            </div>
            <SearchIcon sx={{position: 'relative', top: 5}}/>
            <Input sx={{paddingLeft: 4, position: 'relative', right: 25}} type="search" name="search" value={search}
                   onChange={(e) => setSearch(e.target.value)}/>
            <Button type="submit">Search</Button>
        </form>
    </Box>
}