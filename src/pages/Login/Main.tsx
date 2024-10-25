import './styled.css';
import background1 from '../../assets/background1.png';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import ButtonComponent from '../../Button/ButtonStyled';

function Main() {
  return (
    <>
      <div className='app'>
        <div className='Bar_Lateral'>
            <img src={background1} className='teste' alt='teste image' />
        </div>
        <div className='Login'>
          <div className='cabecalho'>
            <h1>Já bateu seu ponto hoje?</h1>
          </div>
              <Box sx={{ '& button': { m: 1, } }}></Box>
              <Box
              className="box"
              component="form"
              sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
              />
              <ButtonComponent />
              </Box>
          <div className='CadSenha'>
            <div><a href='../Cadastro/Main'>Não está cadastrado? <strong>Cadastre-se</strong></a></div>
            <div><a href='../RecSenha/Main'>Esqueci a senha</a></div>
          </div>
    
        </div>
      </div>
    </>
  )
}

export default Main;
