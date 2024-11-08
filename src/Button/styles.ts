import styled from "styled-components";

export const ButtonContainer = styled.button `
    display: flex;
    margin: 5px 8px;
    padding: 10px;  
    position: relative;

    flex-direction: column;
    justify-Content: center;  
    align-Items: center;  
    align-Self: stretch; 

    color: #000000;
    border-Radius: 4px;  
    background: #4ADD8C;  
    width: 480px;
    border: none;
    cursor: pointer;

    boxShadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 
               0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
               0px 3px 1px -2px rgba(0, 0, 0, 0.20);
  
    '&:hover': {
      background: #43c078; 
    }
  `
  
  

  
  