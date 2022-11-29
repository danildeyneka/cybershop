import { DatabaseType } from '../@types/types'
import catalogSlice, { addItem, deleteItem, setItems } from '../redux/slices/CatalogSlice'

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

describe('catalog slice works correctly', () => {
    const initialState = {
        items: [] as DatabaseType[],
        loading: false,
        awaiting: false,
        awaitingArr: [] as number[]
    }
    it('should write new data to state', () => {
        const state = catalogSlice(initialState, setItems.fulfilled)
        expect(state.items).not.toBe([])
        expect(state.loading).toBe(false)
    })
    it('should add new data to state', () => {
        const action = {
            type: addItem.fulfilled.type,
            payload: newItem
        }
        const state = catalogSlice(initialState, action)
        expect(state.items).toStrictEqual([newItem])
    })
    it('should delete data from state', () => {
        const action = {
            type: deleteItem.fulfilled.type,
            payload: 555
        }
        const initialState = {
            items: [newItem] as DatabaseType[],
            loading: false,
            awaiting: false,
            awaitingArr: [] as number[]
        }
        const state = catalogSlice(initialState, action)
        expect(state.items).toStrictEqual([])
    })
})