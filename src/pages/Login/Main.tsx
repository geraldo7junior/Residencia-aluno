import './styled.css';
import background1 from '../../assets/background1.png';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { ButtonLarge } from '../../Button/ButtonStyled';

const Login = () => {
  return (
    <>
      <div className='login'>
        <div className='BarLateral'>
            <img src={background1} className='ImageLogin' alt='teste image' />
        </div>
        <div className='Login'>
            <div className='cabecalho'>
              <h1>Já bateu seu ponto hoje?</h1>
            </div>
                <Box
                className="box"
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
                noValidate
                autoComplete="off"
              >
                <TextField id="outlined-basic" label="Email *" variant="outlined" />
                <TextField
                  id="filled-password-input"
                  label="Password *"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                />
                </Box> 
                <ButtonLarge>Login</ButtonLarge>
            <div className='CadSenha'>
              <div><a href='/cadastro'>Não está cadastrado? <strong>Cadastre-se</strong></a></div>
              <div><a href='/recuperarsenha'>Esqueci a senha</a></div>
            </div>
        </div>
      </div>
    </>
  )
}

export  { Login };
