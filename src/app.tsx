import './styles.css'
import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import { Login } from './login/main';
import { RecSenha } from './RecSenha/main';
import { Cadastro } from './Cadastro/main'
import { Home } from './Home/main';
import { Justificar } from './Justificar/main';
import { CorrigirPonto } from './Corrigir/main';
import { Logout } from './logout/main'

function app () {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/recuperarsenha' element={<RecSenha />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/home' element={<Home />} />
                <Route path='/justificarponto' element={<Justificar />} />
                <Route path='/corrigirponto' element={<CorrigirPonto />} />
                <Route path='/logout' element={<Logout />} />
            </Routes>
        </Router>
    )
}
export default app;