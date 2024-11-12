import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
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
            sx={{ '& > :not(style)': { m: 1, width: '35ch'} }}
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
            sx={{ '& > :not(style)': { m: 1, width: '60ch' }, display:'flex', }}
            noValidate
            autoComplete="off">
                <TextField id="outlined-basic" label={label} variant="outlined" type='text' />
            </Box> 

    )
}
const DateInput: React.FC<BoxProps> = ({label}) => {
    const [value, setValue] = React.useState<Dayjs | null>(null);

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{
          width: '23ch',
          m: 1,
          display: 'flex',
        }}>
            <DatePicker label={label} value={value} onChange={(newValue) => setValue(newValue)}  />
        </Box>
      </LocalizationProvider>
    );
}

export { InputEmail, InputPassword, InputName, InputCargo, DateInput }