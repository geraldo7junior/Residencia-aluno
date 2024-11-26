import './styles.css';
import background2 from  '../../assets/background2.png';
import { Barlateral } from '../../Components/barralateral/main';
import { ButtonPrimary, ButtonSmall } from '../../Components/Button/main';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Stack } from '@mui/material';
import { InputEmail } from '../../Components/Input/main';



const RecSenha = () => {

    const navigate = useNavigate();

    const handleClickRecSenha = () => {
        navigate('#')
    }
    const handleClickLogin = () => {
        navigate('/')
    }
    return (
        <>
        <div className='senha'>
            <Barlateral img={background2}/>
            <div className='RecSenha'>
                <div className='BotaoFlutuante'>
                    <ButtonSmall title='Voltar' onClick={handleClickLogin}>
                        <Stack direction="row">
                            <ArrowBackIcon fontSize="small"/>
                        </Stack>
                    </ButtonSmall>
                </div> 
                    <div className='CabSenha'>
                        <h1>Se perdeu? A gente te acha!</h1>
                    </div>
                    <div className='InputRecSenha'>
                        <InputEmail label='Email *'/>
                        <ButtonPrimary title="Recuperar Senha" onClick={handleClickRecSenha} />
                        <div className='TextDownSenha'>
                            <a href="/cadastro">Ainda não é cadastrado? <strong>Crie agora mesmo!</strong></a>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export { RecSenha }