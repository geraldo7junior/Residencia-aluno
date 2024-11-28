import './styled.css';
import { MenuComponent } from "../../Components/barralateral/main";
import { Header } from '../../Components/Header/main';
import { List } from '../../Components/Lista/main';
import 'leaflet/dist/leaflet.css';

const Home = () => {

    return (
        <div className="home">
            <MenuComponent />
            <div className='HeaderHome'>
                <Header />
            </div>
            <div className='HomeContainer'>
                <List />  
            </div>            
        </div>
    )
}

export { Home }