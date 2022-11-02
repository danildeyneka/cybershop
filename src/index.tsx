import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import {BrowserRouter} from 'react-router-dom'
import {createTheme, ThemeProvider} from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            main: '#41D3BD',
            dark: '#2E4057'
        },
        secondary: {
            main: '#F34213'
        }
    }
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </Provider>
    </BrowserRouter>
)

