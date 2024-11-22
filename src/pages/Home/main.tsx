
import './styled.css';
import { MenuComponent } from "../../barralateral/main";
import { Header } from '../../Header/main';
import { List } from '../../Lista/main';

const Home = () => {
    return (
        <div className="home">
            <MenuComponent />
            <div className='HomeContainer'>
                <Header />
                <List />   
            </div>
        </div>
    )
}

export { Home }