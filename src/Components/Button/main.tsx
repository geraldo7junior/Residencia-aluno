import React from "react";
import { ButtonContainer, ButtonSm, ButtonMenu, ButtonPonto} from "./styles";
import { useLocation } from "react-router-dom";

interface ButtonProps {
  title: string;
  onClick: () => void;
  fontSize?: string;
  fontWeight?: string;
  letterSpacing?: string;
  children?: React.ReactNode;
  to?: string;
}


const ButtonPrimary: React.FC<ButtonProps> = ({title, onClick, fontSize, fontWeight}) => {
  return (
    <>
    <ButtonContainer onClick={onClick} fontSize={fontSize} fontWeight={fontWeight}>
      {title}
    </ButtonContainer>  
    </>
  )
}

const ButtonSmall: React.FC<ButtonProps> = ({title, onClick, fontSize, fontWeight, children}) => {
  return(
    <ButtonSm onClick={onClick} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
      {title}
    </ButtonSm>
  )
}

const Buttonmenu: React.FC<ButtonProps> = ({title, onClick, fontSize, fontWeight, children, to}) => {

  const location = useLocation();

  // Determina se a rota atual é igual à rota do botão
  const isActive = location.pathname === to;

  return (
    <ButtonMenu onClick={onClick} fontSize={fontSize} fontWeight={fontWeight} isActive={isActive}>
      {children}
      {title}
    </ButtonMenu>
  )

}

const Buttonponto: React.FC<ButtonProps> = ({title, onClick, fontSize, fontWeight, letterSpacing}) => {
  return (
    <ButtonPonto onClick={onClick} fontSize={fontSize} fontWeight={fontWeight} letterSpacing={letterSpacing}>
      {title}
    </ButtonPonto>
  )

}


export { ButtonPrimary, ButtonSmall, Buttonmenu, Buttonponto }