import { BarLateral, Menu } from './styles'
import React from "react";
import { Buttonmenu } from '../Button/main';
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import ArticleIcon from '@mui/icons-material/Article';
import LogoSiDi from '../../assets/Logo-Colorido.png';


interface imagemProps {
    img: string;
}



const Barlateral: React.FC<imagemProps> = ({ img }) => {
   return (
        <BarLateral>
            <img src={img} alt='Imagem meramente ilustrativa' />
        </BarLateral>
)}


const MenuComponent = () => {
    const navigate = useNavigate();

    const handleClicklogout = () => {
        navigate('/logout')
    }

    const handleClickHome = () => {
        navigate('/home')
    }
    
    const handleClickJustificar = () => {
        navigate('/justificarponto')
    }

    const handleClickCorrigir = () => {
        navigate('/corrigirponto')
    }

    return (
        <Menu>
            <img src={LogoSiDi} alt='Logo'/>
            <Buttonmenu title='Home' onClick={(handleClickHome)} to="/home">
                <Stack direction="row" spacing={1}>
                    <HomeIcon fontSize='medium'/>
                </Stack>
            </Buttonmenu>
            <hr />
            <Buttonmenu title='Justificar Faltas' onClick={(handleClickJustificar)} to="/justificarponto">
                <Stack spacing={1}>
                    <ArticleIcon fontSize='medium'/>
                </Stack>
            </Buttonmenu>
            <Buttonmenu title='Corrigir Ponto' onClick={(handleClickCorrigir)} to="/corrigirponto">
                <Stack>
                    <EditIcon fontSize='medium'/>
                </Stack>
            </Buttonmenu>
            <hr />
            <Buttonmenu title='Sair' onClick={(handleClicklogout)}>
                <Stack spacing={2}>
                    <LogoutIcon fontSize='medium'/>
                </Stack>
            </Buttonmenu>
        </Menu>
    )
}

export { Barlateral, MenuComponent }