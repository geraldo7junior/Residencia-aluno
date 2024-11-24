import styled from "styled-components";

export const Container = styled.div `
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
export const Row = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;

`

export const Diaria = styled.div `
    margin: 10px;
    padding: 0px 10px;
    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-size: 20px;
    }
`

export const Hour = styled.div`
    padding: 0 320px;
    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-size: 20px;
        border: 1px solid;
        padding: 5px;
        color: #9719D280;
}

`