import './styles.css';
import background2 from  '../../assets/background2.png';
import  Box  from '@mui/material/Box';
import { TextField } from '@mui/material';
import { ButtonLarge, ButtonSmall } from '../../Button/ButtonStyled';
import { useNavigate } from "react-router-dom";

const RecSenha = () => {
    
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/')
    }
    
    return (
        <>
        <div className='senha'>
            <div className='BarLateral'>
            <img src={background2} className='ImageSenha' alt='Esqueci Senha' />
            </div>
            <div className='RecSenha'>
                <ButtonSmall onClick={handleClickSignIn}>Voltar</ButtonSmall>
                <div className='CabSenha'>
                    <h1>Se perdeu? A gente te acha!</h1>
                </div>
                    <Box
                    className="box"
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" label="Email" variant="outlined" required/>
                    </Box>
                    <ButtonLarge>Recuperar Senha</ButtonLarge>
            </div>
        </div>
        </>
    )
}

export { RecSenha }