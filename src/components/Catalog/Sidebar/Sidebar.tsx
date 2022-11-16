import {FC, useState} from 'react'
import {Box, Button, Input} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export const Sidebar: FC<{ setSearchParams: any, searchQuery: string }> = ({setSearchParams, searchQuery}) => {
    const [search, setSearch] = useState(searchQuery)
    const searchHandler = (e: any) => {
        e.preventDefault()
        const query = e.target.search.value
        const params: any = {}
        if (query.length) params.search = query

        setSearchParams(params)
    }

    return <Box component="aside" sx={{marginLeft: 5}}>
        <form onSubmit={searchHandler}>
            <SearchIcon sx={{position: 'relative', left: 25, top: 5}}/>
            <Input sx={{paddingLeft: 4}} type='search' name='search' value={search} onChange={(e) => setSearch(e.target.value)}/>
            <input type='submit' value='Search'/>
            <div>filters</div>
        </form>
    </Box>
}