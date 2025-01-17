
import styled from "styled-components";

interface ButtonProps {
  fontSize?: string; // Tamanho do texto
  fontWeight?: string; // Peso do texto
  letterSpacing?: string;
}

export const ButtonContainer = styled.button<ButtonProps> `
    display: flex;
    margin: 5px 8px;
    padding: 10px;  
    position: relative;

    flex-direction: column;
    justify-Content: center;  
    align-Items: center;  
    align-Self: stretch; 
    font-family: "Kumbh Sans", Helvetica, sans-serif;

    color: #000000;
    border-Radius: 4px;  
    background: #4ADD8C;  
    width: 480px;
    border: none;
    cursor: pointer;

    font-size: ${(props) => props.fontSize || "16px"};
    font-weight: ${(props) => props.fontWeight || "normal"};
    letter-spacing: ${(props) => props.letterSpacing || "0px"};

    boxShadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 
               0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
               0px 3px 1px -2px rgba(0, 0, 0, 0.20);
  
    &:hover {
      background: #43c078; 
    }
  `
  export const ButtonSm = styled.button<ButtonProps> `
  
    display: flex;
    margin: 20px 3px;
    padding: 10px;  
    position: relative;

    flex-direction: row;
    justify-Content: center;  
    align-Items: center;  
    align-Self: stretch;
    font-family: "Kumbh Sans", Helvetica, sans-serif; 

    color: #000000;
    border-Radius: 4px;  
    background: #4ADD8C;  
    width: 100px;
    gap: 12px;
    border: none;
    cursor: pointer;
    font-size: ${(props) => props.fontSize || "16px"};
    font-weight: ${(props) => props.fontWeight || "normal"};
    letter-spacing: ${(props) => props.letterSpacing || "0px"};
    
    boxShadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 
               0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
               0px 3px 1px -2px rgba(0, 0, 0, 0.20);
  
    &:hover {
      background: #43c078; 
    }
  
  `

  export const ButtonMenu = styled.button<ButtonProps & { isActive?: boolean }> `
    display: flex;
    margin: 10px 30px;
    position: relative;

    flex-direction: row;
    justify-Content: center;
    align-items: center;
    align-self: stretch;
    border: 0.5px solid;
    border-color: #FFD8FF;
    font-family: "Kumbh Sans", Helvetica, sans-serif;

    color: ${(props) => (props.isActive ? "#000000" : "#000000")};
    background: ${(props) => (props.isActive ? "#4ADD8C" : "#FFFFFF")};
    border-radius: 4px;
    width: 180px;
    height: 60px;
    gap: 10px;;

    font-size: ${(props) => props.fontSize || "16px"};
    font-weight: ${(props) => props.fontWeight || "normal"};
    letter-spacing: ${(props) => props.letterSpacing || "0px"};

     &:hover {
      background: ${(props) => (props.isActive ? "#43C078" : "#4ADD8C")};
    }
   
`

  export const ButtonPonto = styled.button<ButtonProps> `
    display: flex;
    margin: 10px 10px;
    position relative;

    flex-direction: column;
    justify-Content: center;
    align-items: center;
    align-self: stretch;
    border: none;
    font-family: "Kumbh Sans", Helvetica, sans-serif;

    color: ##101010;
    border-Radius: 4px;
    background: #4ADD8C;
    width: 150px;
    height: 50px;
  
    font-size: ${(props) => props.fontSize || "16px"};
    font-weight: ${(props) => props.fontWeight || "normal"};
    letter-spacing: ${(props) => props.letterSpacing || "0px"};

  `

  

  
  