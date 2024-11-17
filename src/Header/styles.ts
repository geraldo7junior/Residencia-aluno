import styled from "styled-components";

export const Container = styled.div `
    width: 80%;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 4px 26px #BC9AD640;
    margin: 0px auto;


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
    padding: 0px 25px;
    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-size: 20px;
    }
`

export const Hour = styled.div`
    padding: 0 340px;
    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-size: 20px;
        border: 1px solid;
        padding: 5px;
        color: #9719D280;
}

`