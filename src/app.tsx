import './styles.css'
import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import  { Login } from './pages/login/main'
import { RecSenha } from './pages/RecSenha/main';


function app () {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/recuperarsenha' element={<RecSenha />} />
            </Routes>
        </Router>
    )
}
export default app;