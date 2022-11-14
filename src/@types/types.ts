export type DatabaseType = {
    id: string | number
    category: 'mouse' | 'keyboard' | 'headphones'
    brand: string
    name: string
    oldPrice: null | number | string
    price: number | string
    photo: string
    desc: string
}

export type UsersDataType = {
    name: string
    password: string
}