import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

const InputEmail = () => {
    return(
            <Box
            className="box"
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Email *" variant="outlined" />
            </Box> 

    )
}

const InputPassword = () => {
    return(
        <Box
            className="box"
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
            noValidate
            autoComplete="off">

            <TextField
                id="filled-password-input"
                label="Password *"
                type="password"
                autoComplete="current-password"
                variant="outlined" />
        </Box>
)}

export { InputEmail, InputPassword }