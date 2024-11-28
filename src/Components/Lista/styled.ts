import styled from "styled-components"


export const Container = styled.div`
    width: 80%;
    height: calc(50vh - 120px); /* Certifique-se que essa altura é adequada para o layout geral */
    overflow-y: auto;
    padding-right: 10px;
    margin-top: 20px;
    margin-left: 8%;
    display: flex;
    justify-content: space-between;  
    align-items: center; 
    background: #ffffff;
    position: relative; /* Define que o Container segue o fluxo da página */  
`;

// Tabela
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  table-layout: fixed;
  font-family: "Kumbh Sans", Helvetica, sans-serif;
`;

// Cabeçalho da tabela
export const HeaderRow = styled.tr`
  background: #f7f7f7;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  position: sticky; /* Mantém o cabeçalho fixo */
  top: 0; /* Garante que ele fique no topo */
  z-index: 2; /* Coloca o cabeçalho acima do restante */
  border-bottom: 1px solid #ddd;
`;

// Linha da tabela
export const TableRow = styled.tr<{ highlight: boolean }>`
  background: ${({ highlight }) => (highlight ? "#f9f3f9" : "#ffffff")};
  &:hover {
    background: #4ADD8C;
  }
`;

// Célula da tabela
export const TableCell = styled.td`
  padding: 12px;
  font-size: 14px;
  text-align: center; /* Centraliza horizontalmente */
  vertical-align: middle; /* Centraliza verticalmente */
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  white-space: nowrap;
  font-family: "Kumbh Sans", Helvetica, sans-serif;

  &:first-child {
    border-left: 1px solid #ddd;
  }

  &:last-child {
    text-align: center;
    border-right: 1px solid #ddd;
  }
`;