
import './styled.css';
import { MenuComponent } from "../../barralateral/main";
import { Header } from '../../Header/main';


const Home = () => {
    return (
        <div className="home">
            <MenuComponent />
            <div className='HomeContainer'>
                <Header />
            </div>
        </div>
    )
}

export { Home }