import './styles.css'
import background3 from '../../assets/background3.png'
import { Barlateral } from '../../barralateral/main'
import { InputEmail, InputName, InputPassword, InputCargo, DateInput } from '../../Input/main'
import { Button } from '../../Button/main'
import { useNavigate } from 'react-router-dom'

const Cadastro = () => {

    const navigate = useNavigate();

    const handleClickCadastro = () => {
        navigate('/')
    }

    return(
        <div className="cadastro">
            <Barlateral img={background3} />
            <div className='CadastroContainer'>
                <div className='CabecalhoCadastro'>
                    <h1>Cadastre-se! É de graça!</h1>
                </div>
                <InputEmail label="Email *"/>
                <InputEmail label="Confirme seu Email *"/>
                <InputPassword label='Senha *'/>
                <InputPassword label='Confirme sua senha *' />
                <div className='NameAndDate'>
                    <InputName label='Insira seu nome *'/> 
                    <DateInput label='Data de Nasc.'/>
                </div>
                <InputCargo label='Insira seu cargo *' />
                
                <Button title="Finalizar Cadastro" onClick={(handleClickCadastro)}/>
                <div className='TextDown'>
                    <h3><a href="/">Já tem uma conta? <strong>Logue agora!</strong></a></h3>
                </div>
            </div>
        </div>
    )
}

export { Cadastro }