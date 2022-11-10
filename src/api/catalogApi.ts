import {DatabaseType} from '../@types/types'
import {instance} from './api'

const endpoint = 'database'

export const catalogApi = {
    getItems: () => {
        return instance.get(endpoint)
            .catch(err => console.error(err))
    },
    addItem: (obj: DatabaseType) => {
        return instance.post(endpoint, obj)
            .catch(err => console.error(err))
    },
    deleteItem: (id: number) => {
        return instance.delete(`${endpoint}/${id}`)
            .catch(err => console.error(err))
    }
}