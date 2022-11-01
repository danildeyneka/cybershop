import {FC, useEffect} from 'react'
import {favouritesApi} from '../../api/api'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {Card} from '../Card/Card'
import {favouritesActions} from '../../redux/slices/FavouritesSlice'


export const Favourites: FC = () => {
    const favourites = useAppSelector(state => state.favourites.favourites)
    const mappedFavourites = favourites?.map(item => <Card i={item}/>)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const setData = async () => {
            const data = await favouritesApi.getFavourites()
            dispatch(favouritesActions.setFavourites(data))
        }
        setData()
    }, [])

    if (favourites.length === 0) return <div>No items liked</div>
    // сделать некликабельной кнопку перехода в избранное, пока там не появится хоть 1 объект
    return <>
        favs
        {mappedFavourites}
    </>
}