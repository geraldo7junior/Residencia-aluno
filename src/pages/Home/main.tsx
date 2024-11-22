
import './styled.css';
import { MenuComponent } from "../../barralateral/main";
import { Header } from '../../Header/main';
import { List } from '../../Lista/main';

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