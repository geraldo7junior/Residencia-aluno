import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import React from 'react';

interface BoxProps {
    label: string;
}
const InputEmail: React.FC<BoxProps> = ({label}) => {
    return(
            <Box
                className="box"
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
                noValidate
                autoComplete="off">

                <TextField id="outlined-basic" label={label} variant="outlined" type='email' />
            </Box> 

    )
}

const InputPassword: React.FC<BoxProps> = ({label}) => {
    return(
        <Box
            className="box"
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
            noValidate
            autoComplete="off">

            <TextField
                id="filled-password-input"
                label={label}
                type="password"
                autoComplete="current-password"
                variant="outlined" />
        </Box>
)}

const InputName: React.FC<BoxProps> = ({label}) => {
    return(
            <Box
            className="box"
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
            noValidate
            autoComplete="off">

            <TextField id="outlined-basic" label={label} variant="outlined" type='text' />
            
            </Box> 

    )
}

const InputCargo: React.FC<BoxProps> = ({label}) => {
    return(
            <Box
            className="box"
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
            noValidate
            autoComplete="off">
                <TextField id="outlined-basic" label={label} variant="outlined" type='text' />
            </Box> 

    )
}

export { InputEmail, InputPassword, InputName, InputCargo }