import './styled.css';
import login from '../../assets/Login.svg';
import { ButtonPrimary } from '../Components/Button/main';
import { InputEmail, InputPassword } from '../Components/Input/main';
import { Barlateral } from '../Components/barralateral/main'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 
  const handleLogin = () => {

    const storedUsers = JSON.parse(localStorage.getItem("userData") || "[]");

    if (storedUsers.length === 0) {
        alert("Nenhum usuário encontrado. Cadastre-se primeiro!");
        return;
    }

    // Busca o usuário correspondente
    const user = storedUsers.find((u: { email: string, password: string }) => 
        u.email === email && u.password === password
    );

    if (user) {
        alert("Login realizado com sucesso!");
        localStorage.setItem("currentUser", JSON.stringify(user.email));
        navigate("/home");
    } else {
        alert("Email ou senha incorretos");
    }
};
  return (
    <>
      <div className='login'>
        <Barlateral img={login}/>

        <div className='Logincontainer'>
            <div className='cabecalho'>
              <h1>Já bateu seu ponto hoje?</h1>
            </div>
            <div className='LoginInput'>
              <InputEmail label='Email *' onChange={(e) => setEmail(e.target.value)}/>
              <InputPassword label='Senha *' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className='CadSenha'>
                <div><a href='/cadastro'>Não está cadastrado? <strong>Cadastre-se</strong></a></div>
                <div><a href='/recuperarsenha'>Esqueci a senha</a></div>
              </div>
              <ButtonPrimary title="Login" onClick={(handleLogin)}/>
        </div>
      </div>
    </>
  )
}

export  { Login };
