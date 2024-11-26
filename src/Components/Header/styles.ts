import styled from "styled-components";


export const Container = styled.div`
    width: 70%;
    height: 100px;
    background: #FFFFFF;
    box-shadow: 0px 4px 26px #BC9AD640;
    margin: 20px 100px;
    position: fixed;

    display: flex;
    justify-Content: space-between;  
    align-Items: center;  
`

export const ContainerSecond = styled.div`
    width: 20%;
    height: 100px;
    background: #FFFFFF;
    box-shadow: 0px 4px 26px #BC9AD640;
    margin: 20px 100px;
    position: fixed;

    display: flex;
    justify-Content: space-between;  
    align-Items: center;  
`

export const ContainerMiddle = styled.div`
    width: 60%;
    min-height: 40vh ;
    background: #FFFFFF;
    box-shadow: 0px 4px 26px #BC9AD640;
    margin: 20px 100px;
    position: relative;

    display: flex;
    justify-Content: center;  
    align-Items: center;
    flex-direction: column;  

    flex-wrap: wrap; /* Permite que o conteúdo ocupe mais de uma linha */
    overflow: auto; /* Adiciona barra de rolagem se o conteúdo for maior */
    padding: 20px; /* Espaçamento interno para evitar que o conteúdo encoste nas bordas */
    gap: 10px; /* Espaçamento entre os itens */
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;

`

export const Diaria = styled.div `
    margin: 10px;
    padding: 0px 100px;
    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-size: 20px;
    }
`
export const UserDados = styled.div `
    margin: 10px;
    padding: 0px 10px;
    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-size: 20px;
    }
`


export const Hour = styled.div`
    padding: 0 310px;
    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-size: 20px;
        border: 1px solid;
        padding: 5px;
        color: #9719D280;
}

`