import './styles.css'
import Cadastroimg from '../assets/Cadastro.svg'
import { InputEmail, InputConfirmarPassword, InputName, InputPassword, InputConfirmarEmail ,InputCargo, DateInput } from '../Components/Input/main'
import { ButtonPrimary } from '../Components/Button/main'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { Dayjs } from 'dayjs';
import { Barlateral } from '../Components/barralateral/main'


const Cadastro = () => {

    const [email, setEmail] = useState("");
    const [confirmarEmail, setConfirmarEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmarPassword, setConfirmarPassword] = useState("");
    const [nome, setNome] = useState("");
    const [DataNasc, setDataNasc] = useState<Dayjs | null>(null);
    const [cargo, setCargo] = useState("");

    console.log("email:", email);
    console.log("confirmarEmail:", confirmarEmail);
    console.log("password:", password);
    console.log("ConfirmarPassword:", ConfirmarPassword);
    console.log("nome:", nome);
    console.log("DataNasc:", DataNasc);
    console.log("cargo:", cargo);
    

    const handleRegister = () => {
        if (!email || !confirmarEmail || !password || !ConfirmarPassword ||!nome || !DataNasc || !cargo) {
            alert("Preencha todos os campos!");
            console.log("Passou aqui preenchimento");
            return;
             
        }

        if (password !== ConfirmarPassword) {
            alert("As senhas não coincidem");
            console.log("Passou aqui senhas não coincidem");
            return;
        }

        if (email !== confirmarEmail) {
            alert("Os emails não coincidem");
            console.log("Passou aqui emails não coincidem");
            return;
        }

        const userDados = { email, password, nome,  DataNasc: DataNasc ? DataNasc.format('YYYY-MM-DD') : '', cargo };
        const existingUsers = JSON.parse(localStorage.getItem("userData") || "[]");
        
        const userExists = existingUsers.some((user: { email: string }) => user.email === email);
        if (userExists) {
            alert("Email já cadastrado.");
            return;
        }
        existingUsers.push(userDados);
        localStorage.setItem("userData", JSON.stringify(existingUsers));

        alert("Cadastro realizado com sucesso!");
        navigate("/");
    };

    const navigate = useNavigate();

    return(
        <div className="cadastro">
            <Barlateral img={Cadastroimg} />
            <div className='CadastroContainer'>
                <div className='CabecalhoCadastro'>
                    <h1>Cadastre-se! É de graça!</h1>
                </div>
                <div className='CadastroInput'>
                  <InputEmail label="Email *" onChange={(e) => setEmail(e.target.value)} />
                  <InputConfirmarEmail label="Confirme seu Email *" onChange={(e) => setConfirmarEmail(e.target.value)} />
                  <InputPassword label='Senha *' onChange={(e) => setPassword(e.target.value)}/>
                  <InputConfirmarPassword label='Confirme sua senha *' onChange={(e) => setConfirmarPassword(e.target.value)}/>
                </div>
                <div className='NameAndDate'>
                    <InputName label='Insira seu nome *' onChange={(e) => setNome(e.target.value)}/> 
                    <DateInput label='Data de Nasc.' value={DataNasc} onChange={(newValue) => setDataNasc(newValue)}/>
                </div>
                <InputCargo label='Insira seu cargo *' onChange={(e) => setCargo(e.target.value)}/>
                
                <ButtonPrimary title="Finalizar Cadastro" onClick={handleRegister}/>
                <div className='TextDown'>
                    <a href="/">Já tem uma conta? <strong>Logue agora!</strong></a>
                </div>
            </div>
        </div>
    )
}

export { Cadastro }