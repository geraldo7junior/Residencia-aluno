import './styles.css'
import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import  { Login } from './pages/login/main';
import { RecSenha } from './pages/RecSenha/main';
import { Cadastro } from './pages/Cadastro/main'
import { Home } from './pages/Home/main';

function app () {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/recuperarsenha' element={<RecSenha />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </Router>
    )
}
export default app;