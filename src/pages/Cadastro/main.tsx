import './styles.css'
import background3 from '../../assets/background3.png'
import { Barlateral } from '../../barralateral/main'
import { InputEmail, InputConfirmarPassword, InputName, InputPassword, InputConfirmarEmail ,InputCargo, DateInput } from '../../Input/main'
import { Button } from '../../Button/main'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { Dayjs } from 'dayjs';


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
        localStorage.setItem("user", JSON.stringify(userDados));
        alert("Cadastro realizado com sucesso!");
        console.log("Passou aqui4");
        navigate("/");
    };

    const navigate = useNavigate();

    return(
        <div className="cadastro">
            <Barlateral img={background3} />
            <div className='CadastroContainer'>
                <div className='CabecalhoCadastro'>
                    <h1>Cadastre-se! É de graça!</h1>
                </div>
                <div>
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
                
                <Button title="Finalizar Cadastro" onClick={handleRegister}/>
                <div className='TextDown'>
                    <h3><a href="/">Já tem uma conta? <strong>Logue agora!</strong></a></h3>
                </div>
            </div>
        </div>
    )
}

export { Cadastro }