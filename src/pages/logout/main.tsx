import './styles.css';
import logout from  '../../assets/logout.svg';
import { Barlateral } from '../../Components/barralateral/main';
import { ButtonPrimary } from '../../Components/Button/main';
import { useNavigate } from 'react-router-dom';




const Logout = () => {

    const navigate = useNavigate();

    const handleClickLogout = () => {
        navigate('/')
    }
    return (
        <>
        <div className='logout'>
            <Barlateral img={logout}/>
            <div className='exit'>
                <div className='Cablogout'>
                    <h1>Estaremos sempre aqui,</h1>
                    <h1>esperando seu retorno.</h1>
                </div>
                <div className='ButtonLogout'>
                    <ButtonPrimary title="Voltar ao Login" onClick={handleClickLogout} />
                </div>
            </div>
        </div>
        </>
    )
}

export { Logout }