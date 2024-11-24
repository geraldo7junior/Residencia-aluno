import { Container, Row, Diaria, Hour } from "./styles";
import { Buttonponto } from "../Button/main";
import { useState, useEffect } from 'react';

 interface Registro {
    data: string;
    entrada: string;
    pausa: string;
    saida: string;


}

const Header: React.FC = () => {
    const [DiaSemana, setDiaSemana,] = useState(new Date());
    const [registros, setRegistros] = useState<Registro[]>([]);



    useEffect(()=> {
        const Atualizacao = setInterval (() => {
            setDiaSemana(new Date());
        }, 1000);
        const currentUser = localStorage.getItem("currentUser");
        if (currentUser) {
            const registrosSalvos = JSON.parse(localStorage.getItem(`registros_${currentUser}`) || "[]");
            setRegistros(registrosSalvos); // Atualiza o estado com os registros mais recentes
        }

        return () => clearInterval(Atualizacao);
    }, []);


    const DiadaSemana = DiaSemana.toLocaleDateString('pt-BR', { weekday: 'long' })
    .charAt(0)
    .toUpperCase() + DiaSemana.toLocaleDateString('pt-BR', { weekday: 'long' }).slice(1);
    const HoraAtual = DiaSemana.toLocaleTimeString('pt-BR');

    const handleBaterPonto = () => {
        const dataAtual = DiaSemana.toLocaleDateString("pt-BR");
        const horarioAtual = DiaSemana.toLocaleTimeString("pt-BR");
        const currentUser = localStorage.getItem("currentUser");
    
        if (!currentUser) {
            alert("Usuário não autenticado!");
            return;
        }
    
        // Recupera os registros salvos para o usuário atual
        const registrosPorUsuario = JSON.parse(localStorage.getItem(`registros_${currentUser}`) || "[]");
    
        // Atualiza o último registro ou cria um novo
        if (registrosPorUsuario.length > 0) {
            const ultimoRegistro = registrosPorUsuario[registrosPorUsuario.length - 1];
    
            if (ultimoRegistro.data === dataAtual) {
                // Preenche os campos do último registro
                if (!ultimoRegistro.entrada) {
                    ultimoRegistro.entrada = horarioAtual;
                } else if (!ultimoRegistro.pausa) {
                    ultimoRegistro.pausa = horarioAtual;
                } else if (!ultimoRegistro.saida) {
                    ultimoRegistro.saida = horarioAtual;
                } else {
                    // Todos os campos preenchidos, cria novo registro
                    registrosPorUsuario.push({ data: dataAtual, entrada: horarioAtual, pausa: "", saida: "" });
                }
            } else {
                // Nova data, cria novo registro
                registrosPorUsuario.push({ data: dataAtual, entrada: horarioAtual, pausa: "", saida: "" });
            }
        } else {
            // Lista de registros está vazia
            registrosPorUsuario.push({ data: dataAtual, entrada: horarioAtual, pausa: "", saida: "" });
        }
    
        // Salva os registros atualizados no localStorage
        localStorage.setItem(`registros_${currentUser}`, JSON.stringify(registrosPorUsuario));
    
        // Atualiza a tabela na UI
        window.dispatchEvent(new Event("storage"));

    };
    const pontosHoje = registros.filter((registro) => registro.data === DiaSemana.toLocaleDateString("pt-BR")).length;
    return (
      <>
      <Container>
        <Row>
            <Diaria>
                <p><strong>{DiadaSemana}</strong></p>
                <p>Registros: {pontosHoje}</p>
            </Diaria>
            <Hour>
                <p>{HoraAtual}</p>
            </Hour>
            <Buttonponto title='BATER PONTO' fontSize="15px" fontWeight="Bold" letterSpacing="0.8px" onClick={handleBaterPonto}/>
        </Row>
      </Container>
      </>
    )
  }

  export { Header }