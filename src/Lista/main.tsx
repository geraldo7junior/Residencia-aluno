import {Container, Table, HeaderRow, TableRow, TableCell } from './styled';
import React, {useState, useEffect} from "react";


interface Registro {
    data: string;
    entrada: string;
    pausa: string;
    saida: string;
  }

const List: React.FC = () => {
    const [registros, setRegistros] = useState<Registro[]>([])
    const [currentUser, setCurrentUser] = useState<string | null>(null);


    useEffect(() => {
        const user = localStorage.getItem("currentUser");
        if (!user) {
          alert("Usuário não autenticado!");
          return;
        }
        setCurrentUser(user);
      }, []);

      // Recupera o usuário logado e carrega os registros no estado
    useEffect(() => {
        if (currentUser) {
        const registrosSalvos = JSON.parse(localStorage.getItem(`registros_${currentUser}`) || "[]");
        setRegistros(registrosSalvos);
        }
    }, [currentUser]);
    
    useEffect(() => {
        const atualizarRegistros = () => {
            const currentUser = localStorage.getItem("currentUser");
            if (!currentUser) return;
    
            const registrosAtualizados = JSON.parse(localStorage.getItem(`registros_${currentUser}`) || "[]");
            setRegistros(registrosAtualizados);
        };
    
        window.addEventListener("storage", atualizarRegistros);
    
        return () => window.removeEventListener("storage", atualizarRegistros);
    }, []);

      const calcularRegistros = (registro: Registro): number => {
        let count = 0;
        if (registro.entrada) count++;
        if (registro.pausa) count++;
        if (registro.saida) count++;
        return count;
    };

    return(
        <Container>
            <Table>
                <thead>
                    <HeaderRow>
                        <TableCell as="th">DATA</TableCell>
                        <TableCell as="th">ENTRADA</TableCell>
                        <TableCell as="th">PAUSA</TableCell>
                        <TableCell as="th">SAÍDA</TableCell>
                        <TableCell as="th">REGISTROS</TableCell>
                    </HeaderRow>
                </thead>
                <tbody>
                    {registros.map((registro, index) => (
                    <TableRow key={index} highlight={index % 2 === 0} >
                        <TableCell>{registro.data}</TableCell>
                        <TableCell>{registro.entrada || "-"}</TableCell>
                        <TableCell>{registro.pausa || "-"}</TableCell>
                        <TableCell>{registro.saida || "-"}</TableCell>
                        <TableCell>{calcularRegistros(registro)}</TableCell>
                    </TableRow>
                    ))}
                    
                </tbody>
            </Table>
        </Container>
    )
}
export { List }