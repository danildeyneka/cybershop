import {FC} from 'react'
import {useParams} from 'react-router-dom'
import {useAppSelector} from '../../../hooks/hooks'
import {Item} from '../../Item/Item'

export const SingleItem: FC = () => {
    const {id} = useParams()
    const {items} = useAppSelector(state => state.catalog)
    const itemArr = items.filter(i => i.id + '' === id)
    const item = itemArr.map(i => <Item i={i} key={i.id} singleItem={true}/>)

    return <>
        {item}
    </>
}