import './styled.css';
import background1 from '../../assets/background1.png';
import { Button } from '../../Button/main';
import { InputEmail, InputPassword } from '../../Input/main';
import { Barlateral } from '../../barralateral/main'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = () => {
    const storedUser = localStorage.getItem("user");

    if(!storedUser) {
      alert("Usuário não encontrado. Cadastre-se primeiro!");
      return;
    }

    const { email: storedEmail, password: storedPassword} =
      JSON.parse(storedUser);

      if (email === storedEmail && password === storedPassword) {
        alert("Login realizado com Sucesso!");
        navigate("/home");
      } else {
          alert("Email ou senha incorretos");
      }
  };

  

  return (
    <>
      <div className='login'>
        <Barlateral img={background1}/>

        <div className='Logincontainer'>
            <div className='cabecalho'>
              <h1>Já bateu seu ponto hoje?</h1>
            </div>

            <InputEmail label='Email *' onChange={(e) => setEmail(e.target.value)}/>
            <InputPassword label='Senha *' onChange={(e) => setPassword(e.target.value)}/>
           
            <div className='CadSenha'>
              <div><a href='/cadastro'>Não está cadastrado? <strong>Cadastre-se</strong></a></div>
              <div><a href='/recuperarsenha'>Esqueci a senha</a></div>
            </div>

            <Button title="Login" onClick={(handleLogin)}/>

        </div>

      </div>
    </>
  )
}

export  { Login };
