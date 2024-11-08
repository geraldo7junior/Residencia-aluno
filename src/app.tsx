import './styles.css'
import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import  { Login } from './pages/Login/Main';
import { RecSenha } from './pages/RecSenha/main';
import { Cadastro } from './pages/Cadastro/main'

function app () {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/recuperarsenha' element={<RecSenha />} />
                <Route path='/cadastro' element={<Cadastro />} />
            </Routes>
        </Router>
    )
}
export default app;