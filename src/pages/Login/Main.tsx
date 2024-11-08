import './styled.css';
import background1 from '../../assets/background1.png';
import { Button } from '../../Button/main';
import { InputEmail, InputPassword } from '../../Input/main';
import { Barlateral } from '../../barralateral/main'
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
      navigate('/recuperarsenha')
  }

  return (
    <>
      <div className='login'>
        <Barlateral img={background1}/>

        <div className='Logincontainer'>
            <div className='cabecalho'>
              <h1>Já bateu seu ponto hoje?</h1>
            </div>

            <InputEmail label='Email *'/>
            <InputPassword label='Senha *'/>
           
            <div className='CadSenha'>
              <div><a href='/cadastro'>Não está cadastrado? <strong>Cadastre-se</strong></a></div>
              <div><a href='/recuperarsenha'>Esqueci a senha</a></div>
            </div>

            <Button title="Login" onClick={(handleClickSignIn)}/>

        </div>

      </div>
    </>
  )
}

export  { Login };
