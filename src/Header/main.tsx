import { Container, Row, Diaria, Hour } from "./styles";
import { Buttonponto } from "../Button/main";
import { useState, useEffect } from 'react';
const Header = () => {
    const [DiaSemana, setDiaSemana,] = useState(new Date());

    useEffect(()=> {
        const Atualizacao = setInterval (() => {
            setDiaSemana(new Date());
        }, 1000)

        return () => clearInterval(Atualizacao);
    }, []);

    const DiadaSemana = DiaSemana.toLocaleDateString('pt-BR', { weekday: 'long' })
    .charAt(0)
    .toUpperCase() + DiaSemana.toLocaleDateString('pt-BR', { weekday: 'long' }).slice(1);
    const HoraAtual = DiaSemana.toLocaleTimeString('pt-BR');

    return (
      <>
      <Container>
        <Row>
            <Diaria>
                <p><strong>{DiadaSemana}</strong></p>
            </Diaria>
            <Hour>
                <p>{HoraAtual}</p>
            </Hour>
            <Buttonponto title='BATER PONTO' fontWeight="Bold" letterSpacing="0.8px"/>
        </Row>
      </Container>
      </>
    )
  }

  export { Header }