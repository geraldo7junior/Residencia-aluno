import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import  React  from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface BoxProps {
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}


interface DateInputProps {
    label: string;
    value: Dayjs | null;
    onChange: (newValue: Dayjs | null) => void;
  }
  

const InputEmail: React.FC<BoxProps> = ({label, onChange}) => {

    return(
            <Box
                className="box"
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
                noValidate
>

                <TextField id="email-input" label={label} variant="outlined" type='email' autoComplete="username" onChange={onChange} />
            </Box> 

    )
}

const InputPassword: React.FC<BoxProps> = ({label, onChange}) => {
    return(
        <Box
            className="box"
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
            noValidate>
            <TextField
                id="username-password"
                label={label}
                variant="outlined"
                type="text"
                autoComplete="username" // Pode ser útil para leitores de tela.
                onChange={onChange}
                sx={{ display: 'none' }}
            />
            <TextField
                id="password-input"
                label={label}
                type="password"
                autoComplete="current-password"
                variant="outlined" 
                onChange={onChange}/>
                
        </Box>
)}

const InputConfirmarEmail: React.FC<BoxProps> = ({label, onChange}) => {

    return(
            <Box
                className="box"
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
                noValidate>

                <TextField id="conf-email" label={label} variant="outlined" type='email' autoComplete="username" onChange={onChange} />
            </Box> 

    )
}


const InputConfirmarPassword: React.FC<BoxProps> = ({label, onChange}) => {
    return(
        <Box
            className="box"
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
            noValidate>
            <TextField
                id="username-ConfirmPass"
                label={label}
                variant="outlined"
                type="text"
                autoComplete="username" // Pode ser útil para leitores de tela.
                onChange={onChange}
                sx={{ display: 'none' }}
            />
            <TextField
                id="filled-Confpassword-input"
                label={label}
                type="password"
                autoComplete="current-password"
                variant="outlined" 
                onChange={onChange}/>
                
        </Box>
)}

const InputName: React.FC<BoxProps> = ({label, onChange}) => {
    return(
            <Box
            className="box"
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '35ch'} }}
            noValidate
            autoComplete="Name">

            <TextField id="outlined-basicName" label={label} variant="outlined" type='text' onChange={onChange}/>
            </Box> 

    )
}

const InputCargo: React.FC<BoxProps> = ({label, onChange}) => {
    return(
            <Box
            className="box"
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '60ch' }, display:'flex', }}
            noValidate
            autoComplete="off">
                <TextField id="outlined-basicCargo" label={label} variant="outlined" type='text' onChange={onChange} />
            </Box> 

    )
}

const DateInput: React.FC<DateInputProps> = ({label, value, onChange}) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{
          width: '23ch',
          m: 1,
          display: 'flex',
        }}>
            <DatePicker label={label} value={value} onChange={onChange}/>
        </Box>
      </LocalizationProvider>
    );
}

export { InputEmail, InputConfirmarEmail ,InputPassword, InputConfirmarPassword, InputName, InputCargo, DateInput }