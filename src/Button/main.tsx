import React from "react";
import { ButtonContainer, ButtonSm} from "./styles"

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

export { Button, ButtonSmall }