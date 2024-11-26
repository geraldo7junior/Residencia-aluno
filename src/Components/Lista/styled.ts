import styled from "styled-components"


export const Container = styled.div`
    width: 80%;
    height: calc(70vh - 120px);
    overflow-y: auto;
    padding-right: 10px;
    margin-top: 20px;
    margin-left: 8%;
    display: flex;
    justify-Content: space-between;  
    align-Items: center; 
    background: #ffffff;
`

// Tabela
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  table-layout: fixed;
`;

// Cabeçalho da tabela
export const HeaderRow = styled.tr`
  background: #f7f7f7;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  position: sticky;
  top: 0;
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
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  white-space: nowrap;

  &:first-child {
    border-left: 1px solid #ddd;
  }

  &:last-child {
    text-align: center;
    border-right: 1px solid #ddd;
  }
`;