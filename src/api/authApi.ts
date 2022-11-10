import {instance} from './api'

export const authApi = {
    getUsers: () => {
        return instance.get('users')
            .catch(err => console.log(err))
    }
}