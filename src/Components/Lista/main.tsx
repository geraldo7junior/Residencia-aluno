import {Container, Table, HeaderRow, TableRow, TableCell } from './styled';
import React, {useState, useEffect} from "react";
import Checkbox from "@mui/material/Checkbox";


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

const ListCorrigirPontos: React.FC = () => {
    const [registros, setRegistros] = useState<Registro[]>([]);
    const [currentUser, setCurrentUser] = useState<string | null>(null);
    const [selectedHours, setSelectedHours] = useState<string[]>([]);

    useEffect(() => {
        const user = localStorage.getItem("currentUser");
        if (!user) {
            alert("Usuário não autenticado!");
            return;
        }
        setCurrentUser(user);
    }, []);

    useEffect(() => {
        if (currentUser) {
            const registrosSalvos = JSON.parse(localStorage.getItem(`registros_${currentUser}`) || "[]");
            setRegistros(registrosSalvos);
        }
    }, [currentUser]);

    const handleCheckboxChange = (hora: string) => {
        if (selectedHours.includes(hora)) {
            setSelectedHours(selectedHours.filter((h) => h !== hora));
        } else {
            setSelectedHours([...selectedHours, hora]);
        }
    };

    return (
        <Container>
            <Table>
                <thead>
                    <HeaderRow>
                        <TableCell as="th" style={{ textAlign: "center", verticalAlign: "middle" }}>DATA</TableCell>
                        <TableCell as="th" style={{ textAlign: "center", verticalAlign: "middle" }}>ENTRADA</TableCell>
                        <TableCell as="th" style={{ textAlign: "center", verticalAlign: "middle" }}>PAUSA</TableCell>
                        <TableCell as="th" style={{ textAlign: "center", verticalAlign: "middle" }}>SAÍDA</TableCell>
                    </HeaderRow>
                </thead>
                <tbody>
                    {registros.map((registro, index) => (
                        <TableRow key={index} highlight={index % 2 === 0}>
                            <TableCell style={{ textAlign: "center", verticalAlign: "middle" }}>{registro.data}</TableCell>
                            <TableCell style={{ textAlign: "center", verticalAlign: "middle" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                                    <Checkbox
                                        checked={Boolean(selectedHours.includes(`${registro.data}-entrada`))}
                                        onChange={() => handleCheckboxChange(`${registro.data}-entrada`)}
                                        disabled={!registro.entrada}
                                        inputProps={{ "aria-label": "Entrada Checkbox" }}
                                    />
                                    {registro.entrada || "-"}
                                </div>
                            </TableCell>
                            <TableCell style={{ textAlign: "center", verticalAlign: "middle" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                                    <Checkbox
                                        checked={Boolean(selectedHours.includes(`${registro.data}-pausa`))}
                                        onChange={() => handleCheckboxChange(`${registro.data}-pausa`)}
                                        disabled={!registro.pausa}
                                        inputProps={{ "aria-label": "Pausa Checkbox" }}
                                    />
                                    {registro.pausa || "-"}
                                </div>
                            </TableCell>
                            <TableCell style={{ textAlign: "center", verticalAlign: "middle" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                                    <Checkbox
                                        checked={Boolean(selectedHours.includes(`${registro.data}-saida`))}
                                        onChange={() => handleCheckboxChange(`${registro.data}-saida`)}
                                        disabled={!registro.saida}
                                        inputProps={{ "aria-label": "Saída Checkbox" }}
                                    />
                                    {registro.saida || "-"}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};
export { List, ListCorrigirPontos }