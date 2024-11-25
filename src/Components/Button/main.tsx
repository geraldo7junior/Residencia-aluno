import React from "react";
import { ButtonContainer, ButtonSm, ButtonMenu, ButtonPonto} from "./styles";


interface ButtonProps {
  title: string;
  onClick: () => void;
  fontSize?: string;
  fontWeight?: string;
  letterSpacing?: string;
  children?: React.ReactNode;
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

const Buttonmenu: React.FC<ButtonProps> = ({title, onClick, fontSize, fontWeight, children}) => {

  return (
    <ButtonMenu onClick={onClick} fontSize={fontSize} fontWeight={fontWeight}>
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