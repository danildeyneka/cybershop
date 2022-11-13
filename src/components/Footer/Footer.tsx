import {FC} from 'react'
import {Container} from '@mui/material'

export const Footer: FC = () => {

    return <Container component='footer' sx={{mt: 'auto', height: 32, textAlign: 'center', pt: 2, mb: 2}}>
        Online marketplace by Danil Deyneka @ 2022
    </Container>
}