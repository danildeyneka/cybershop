import {FC} from 'react'
import {Box, Typography} from '@mui/material'

type propsT = {
    widthInPx?: number,
    moveRightInPx?: number,
    moveBottomInPx?: number
}

export const ValidationError: FC<propsT> = ({
                                                widthInPx = 230,
                                                moveRightInPx = 91,
                                                moveBottomInPx = 0
                                            }) => {
    return <Box sx={{
        position: 'relative',
        right: moveRightInPx,
        bottom: 2,
        display: 'block',
        color: 'secondary.main',
        '&::after': {
            content: '""',
            position: 'absolute',
            display: 'block',
            height: '2px',
            width: widthInPx,
            backgroundColor: 'secondary.main',
            border: '1px',
        }
    }}><Typography sx={{position: 'absolute', bottom: moveBottomInPx}}>*</Typography></Box>
}