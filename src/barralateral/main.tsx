import { BarLateral, Menu } from './styles'
import React from "react";
import { Buttonmenu } from '../Button/main';
import { useNavigate } from 'react-router-dom'
interface imagemProps {

    img: string;

}



const Barlateral: React.FC<imagemProps> = ({ img }) => {
   return (
        <BarLateral>
            <img src={img} alt='teste' />
        </BarLateral>
)}

const MenuComponent = () => {
    const navigate = useNavigate();

    const handleClicklogout = () => {
        navigate('/')
    }
    const handleClickCadastro = () => {
        navigate('/')
    }
    return (
        <Menu>
            <Buttonmenu title='Home' onClick={(handleClickCadastro)}/>
            <Buttonmenu title='Justificar Faltas' onClick={(handleClickCadastro)}/>
            <Buttonmenu title='Corrigir Ponto' onClick={(handleClickCadastro)}/>
            <Buttonmenu title='Usuário' onClick={(handleClickCadastro)}/>
            <Buttonmenu title='sair' onClick={(handleClicklogout)}/>
        </Menu>
    )
}

export { Barlateral, MenuComponent }