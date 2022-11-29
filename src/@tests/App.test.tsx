import '@testing-library/jest-dom/'
import { screen } from '@testing-library/react'
import { App } from '../App'
import { renderWithProviders } from './test-utils'

describe('app renders', () => {
    renderWithProviders(<App/>)
    it('renders header logo', () => {
        const logo = screen.getByAltText('logo')
        expect(logo).toBeInTheDocument()
    })
    it('renders sidebar', () => {
        const filters = screen.getByPlaceholderText('Search')
        expect(filters).toBeInTheDocument()
    })
})

