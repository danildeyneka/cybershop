import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Box, Button, Input, MenuItem, Paper, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { buttonStyle } from '../../common/Button/ButtonStyle'
import { useAppSelector } from '../../../hooks/hooks'

type propsT = {
    setSearchParams: any
    searchQuery: string
    filterQuery: string
    adminMode: boolean
    setAdminMode: Dispatch<SetStateAction<boolean>>
}

const queryParams: { search?: string, filter?: string } = {}

export const Sidebar: FC<propsT> = ({
                                        setSearchParams,
                                        searchQuery,
                                        filterQuery,
                                        ...props
                                    }) => {
    const {authorized} = useAppSelector(state => state.auth)
    const [search, setSearch] = useState(searchQuery)
    const [filter, setFilter] = useState(filterQuery)

    const setFilterHandler = (filterValue: string) => {
        setFilter(filterValue)
        if (filterValue === 'All') delete queryParams.filter
        else if (filterValue.length) queryParams.filter = filterValue
        setSearchParams(queryParams)
    }

    const searchHandler = (searchValue: string) => {
        setSearch(searchValue)
        if (searchValue.trim() === '') delete queryParams.search
        if (searchValue.length) queryParams.search = searchValue
        setSearchParams(queryParams)
    }

    return <Paper variant="outlined" sx={ {m: 3, p: 5} }>
        <Box component="aside">
            <form style={ {display: 'flex', flexDirection: 'column', alignItems: 'center'} }>
                <TextField select value={ filter } sx={ {width: 230, textAlign: 'center'} }>
                    <MenuItem value="All" onClick={ () => setFilterHandler('All') }>All</MenuItem>
                    <MenuItem value="keyboard" onClick={ () => setFilterHandler('keyboard') }>Keyboard</MenuItem>
                    <MenuItem value="mouse" onClick={ () => setFilterHandler('mouse') }>Mouse</MenuItem>
                    <MenuItem value="headphones" onClick={ () => setFilterHandler('headphones') }>Headphones</MenuItem>
                </TextField>
                <div>
                    <SearchIcon sx={ {position: 'relative', top: 5, left: 25} }/>
                    <Input sx={ {position: 'relative', width: 230, pl: 4, mr: 2, mt: 4, mb: 4} } type="search"
                           name="search"
                           placeholder="Search" value={ search }
                           onChange={ (e) => searchHandler(e.target.value) }/>
                </div>
            </form>
            {/*<Button variant="contained" type="submit" sx={buttonStyle}>Search</Button>*/ }
            { authorized &&
                <Button variant="contained" sx={ buttonStyle }
                        style={ {marginTop: 50, marginRight: 'auto', marginLeft: 'auto', display: 'block'} }
                        onClick={ () => {
                            props.setAdminMode(prevState => !prevState)
                            if (!props.adminMode) alert('Please do not remove the actual items, you can play around with new-added items via admin panel')
                        } }>
                    Edit mode { props.adminMode ? 'on' : 'off' }</Button> }
        </Box>
    </Paper>
}