import './styles.css';
import background2 from  '../../assets/background2.png';
import { InputEmail } from '../../Input/main';
import { Barlateral } from '../../barralateral/main';
import { Button, ButtonSmall } from '../../Button/main';
import { useNavigate } from 'react-router-dom';
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
                <ButtonSmall title='Voltar' onClick={handleClickLogin} /> 
                    <div className='CabSenha'>
                        <h1>Se perdeu? A gente te acha!</h1>
                    </div>
                    <InputEmail label='Email *'/>
                <Button title="Recuperar Senha" onClick={handleClickRecSenha} />
            </div>
        </div>
        </>
    )
}

export { RecSenha }