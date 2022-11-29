import React, { PropsWithChildren } from 'react'
import type { RenderOptions } from '@testing-library/react'
import { render } from '@testing-library/react'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import type { AppStore, RootState } from '../redux/store'
import { setupStore } from '../redux/store'
import { BrowserRouter } from 'react-router-dom'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<RootState>
    store?: AppStore
}

export function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState = {},
        store = setupStore(preloadedState),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) {
    function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
        return <BrowserRouter>
            <Provider store={ store }>
                { children }
            </Provider>
        </BrowserRouter>
    }

    return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})}
}