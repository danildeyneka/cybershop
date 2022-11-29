import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import {Provider} from 'react-redux'
import {setupStore} from './redux/store'
import {BrowserRouter} from 'react-router-dom'
import {createTheme, ThemeProvider} from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            main: '#EABE7C',
            dark: '#8729FF'
        },
        secondary: {
            main: '#F34213',
            contrastText: '#fff'
        }
    }
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <BrowserRouter>
        <Provider store={setupStore()}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </Provider>
    </BrowserRouter>
)

