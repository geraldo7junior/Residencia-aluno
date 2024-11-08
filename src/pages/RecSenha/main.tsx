import './styles.css';
import background2 from  '../../assets/background2.png';
import { InputPassword } from '../../Input/main';


const RecSenha = () => {
    
    return (
        <>
        <div className='senha'>
            <div className='BarLateral'>
            <img src={background2} className='ImageSenha' alt='Esqueci Senha' />
            </div>
            <div className='RecSenha'>
                <div className='CabSenha'>
                    <h1>Se perdeu? A gente te acha!</h1>
                </div>
                <InputPassword />
            </div>
        </div>
        </>
    )
}

export { RecSenha }