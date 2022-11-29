import { addItem, deleteItem, setItems } from '../redux/slices/CatalogSlice'
import { DatabaseType } from '../@types/types'

const firstItem: DatabaseType = {
    id: 1,
    category: 'mouse',
    brand: 'Logitech',
    name: '502 HERO',
    oldPrice: null,
    price: 5999,
    photo: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/1a17bf39f7e1c6cd33ed6476f411d925/0991ca8c863afd7dd77f0e8f50fd6739c94a3bb8c6d9683def7c60d98507cd03.jpg.webp',
    desc: '25600 dpi, светодиодный, USB Type-A, кнопки - 11'
}
const newItem: DatabaseType = {
    id: 555,
    oldPrice: 9999,
    desc: 'test',
    brand: 'test brand',
    category: 'mouse',
    name: 'test name',
    photo: '',
    price: 8000
}

describe('api works correctly', () => {
    const dispatch = jest.fn()

    it('should load initial data, add and delete item', async () => {
        const {calls} = dispatch.mock

        const thunkSet = setItems()
        await thunkSet(dispatch, () => ({}), undefined)
        expect(calls[0][0].type).toBe(setItems.pending.type)
        expect(calls[1][0].type).toBe(setItems.fulfilled.type)
        expect(calls[1][0].payload[0]).toStrictEqual(firstItem)

        const thunkAdd = addItem(newItem)
        await thunkAdd(dispatch, () => ({}), undefined)
        expect(calls[2][0].type).toBe(addItem.pending.type)
        expect(calls[3][0].type).toBe(addItem.fulfilled.type)
        expect(calls[3][0].payload).toStrictEqual(newItem)

        const thunkDelete = deleteItem(555)
        await thunkDelete(dispatch, () => ({}), undefined)
        expect(calls[4][0].type).toBe(deleteItem.pending.type)
        expect(calls[5][0].type).toBe(deleteItem.fulfilled.type)
        expect(calls[5][0].payload).toBe(555)
    })
})