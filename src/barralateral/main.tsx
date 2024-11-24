import { BarLateral, Menu } from './styles'
import React from "react";
import { Buttonmenu } from '../Button/main';
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import ArticleIcon from '@mui/icons-material/Article';

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
    
    const handleClickHome = () => {
        navigate('/home')
    }
    
    const handleClickJustificar = () => {
        navigate('/justificarponto')
    }

    return (
        <Menu>
            <Buttonmenu title='Home' onClick={(handleClickHome)}>
                <Stack direction="row" spacing={1}>
                    <HomeIcon fontSize='medium'/>
                </Stack>
            </Buttonmenu>
            <Buttonmenu title='Justificar Faltas' onClick={(handleClickJustificar)}>
                <Stack spacing={1}>
                    <ArticleIcon fontSize='medium'/>
                </Stack>
            </Buttonmenu>
            <Buttonmenu title='Corrigir Ponto' onClick={(handleClickCadastro)}>
                <Stack>
                    <EditIcon fontSize='medium'/>
                </Stack>
            </Buttonmenu>
            <Buttonmenu title='Usuário' onClick={(handleClickCadastro)}>
                <Stack spacing={1}>
                    <AccountBoxIcon fontSize='medium'/>
                </Stack>
            </Buttonmenu>
            <Buttonmenu title='Sair' onClick={(handleClicklogout)}>
                <Stack spacing={2}>
                    <LogoutIcon fontSize='medium'/>
                </Stack>
            </Buttonmenu>
        </Menu>
    )
}

export { Barlateral, MenuComponent }