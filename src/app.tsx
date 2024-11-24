import './styles.css'
import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import { Login }  from './pages/Login/Main';
import { RecSenha } from './pages/RecSenha/main';
import { Cadastro } from './pages/Cadastro/main'
import { Home } from './pages/Home/main';
import { Justificar } from './pages/Home/Justificar/main';
function app () {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/recuperarsenha' element={<RecSenha />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/home' element={<Home />} />
                <Route path='/justificarponto' element={<Justificar />} />
            </Routes>
        </Router>
    )
}
export default app;