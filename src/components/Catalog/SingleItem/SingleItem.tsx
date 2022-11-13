import {FC} from 'react'
import {useParams} from 'react-router-dom'
import {useAppSelector} from '../../../hooks/hooks'
import {Item} from '../../Item/Item'

export const SingleItem: FC = () => {
    const {uniqueId} = useParams()
    const {items} = useAppSelector(state => state.catalog)
    const itemArr = items.filter(i => +i.uniqueId === +uniqueId!) // plus needed cuz mockapi stringifies numbers
    const item = itemArr.map(i => <Item i={i} key={i.uniqueId} singleItem={true}/>)

    return <>
        {item}
    </>
}