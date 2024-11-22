import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    height: 390px;
    background: #FFFFFF;

    display: flex;
    justify-Content: space-between;  
    align-Items: center; 
`

// Tabela
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

// Cabeçalho da tabela
export const HeaderRow = styled.tr`
  background: #f7f7f7;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
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

  &:first-child {
    border-left: 1px solid #ddd;
  }

  &:last-child {
    text-align: center;
    border-right: 1px solid #ddd;
  }
`;