import React from "react";
import { ButtonContainer, ButtonSm, ButtonMenu} from "./styles"

interface ButtonProps {
  title: string;
  onClick: () => void;
}


const Button: React.FC<ButtonProps> = ({title, onClick}) => {
  return (
    <>
    <ButtonContainer onClick={onClick}>
      {title}
    </ButtonContainer>  
    </>
  )
}

const ButtonSmall: React.FC<ButtonProps> = ({title, onClick}) => {
  return(
    <ButtonSm onClick={onClick}>
      {title}
    </ButtonSm>
  )
}

const Buttonmenu: React.FC<ButtonProps> = ({title, onClick}) => {
  return (
    <ButtonMenu onClick={onClick}>
      {title}
    </ButtonMenu>
  )

}


export { Button, ButtonSmall, Buttonmenu }