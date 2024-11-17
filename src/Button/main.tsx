import React from "react";
import { ButtonContainer, ButtonSm, ButtonMenu, ButtonPonto} from "./styles"

interface ButtonProps {
  title: string;
  onClick: () => void;
  fontSize?: string;
  fontWeight?: string;
  letterSpacing?: string;

}


const Button: React.FC<ButtonProps> = ({title, onClick, fontSize, fontWeight}) => {
  return (
    <>
    <ButtonContainer onClick={onClick} fontSize={fontSize} fontWeight={fontWeight}>
      {title}
    </ButtonContainer>  
    </>
  )
}

const ButtonSmall: React.FC<ButtonProps> = ({title, onClick, fontSize, fontWeight}) => {
  return(
    <ButtonSm onClick={onClick} fontSize={fontSize} fontWeight={fontWeight}>
      {title}
    </ButtonSm>
  )
}

const Buttonmenu: React.FC<ButtonProps> = ({title, onClick, fontSize, fontWeight}) => {
  return (
    <ButtonMenu onClick={onClick} fontSize={fontSize} fontWeight={fontWeight}>
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


export { Button, ButtonSmall, Buttonmenu, Buttonponto }