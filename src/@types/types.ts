export type DatabaseType = {
    uniqueId: string
    category: 'mouse' | 'keyboard' | 'headphones'
    brand: string
    name: string
    oldPrice: null | number
    price: number
    photo: string
    desc: string
}

export type UsersDataType = {
    name: string
    password: string
}