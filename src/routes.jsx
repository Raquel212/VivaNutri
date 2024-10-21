import { BrowserRouter, Route, Routes } from "react-router-dom"
import Entrar from "./pages/Entrar"
import ForgotPassword from "./pages/ForgotPassword"
import Home from "./pages/Home"
import HomeNutriPsico from "./pages/HomeNutriPsico"
import CadastroNutri from "./pages/Nutricionista/CadastroNutri"
import CadastroPaciente from "./pages/Paciente/CadastroPaciente"
import ChatPaciente from "./pages/Paciente/ChatPaciente/ChatPaciente"
import ConsultaPaciente from "./pages/Paciente/ConsultasPaciente/ConsultaPaciente"
import HomePaciente from "./pages/Paciente/HomePaciente"
import MeuProgressoPaciente from "./pages/Paciente/MeuProgressoPaciente/MeuProgressoPaciente"
import PlanoAlimentarPaciente from "./pages/Paciente/PlanoAlimentarPaciente/PlanoAlimentarPaciente"
import ReceitasFavoritasPaciente from "./pages/Paciente/ReceitasFavoritasPaciente/ReceitasFavoritasPaciente"
import RefeicaoPaciente from "./pages/Paciente/RefeicoesPaciente/RefeicaoPaciente"
import ReceitasPaciente from "./pages/Paciente/ReceitasPaciente/ReceitasPaciente"
import QuestionarioPaciente from "./pages/Paciente/QuestionarioPaciente/QuestionarioPaciente"
import CadastroPsicologo from "./pages/Psicologo/CadastroPsicologo"
import Registrar from "./pages/Registrar"
import Sobre from "./pages/Sobre"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/entrar" element={<Entrar />}></Route>
        <Route path="/registrar" element={<Registrar />}></Route>
        <Route path="/cadastroPaciente" element={<CadastroPaciente />}></Route>
        <Route path="/cadastroNutri" element={<CadastroNutri />}></Route>
        <Route
          path="/cadastroPsicologo"
          element={<CadastroPsicologo />}
        ></Route>
        <Route path="/homePaciente" element={<HomePaciente />}></Route>
        <Route path="/homeNutriPsico" element={<HomeNutriPsico />}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
        <Route
          path="/planoAlimentarPaciente"
          element={<PlanoAlimentarPaciente />}
        ></Route>
        <Route path="/refeicaoPaciente" element={<RefeicaoPaciente />}></Route>
        <Route
          path="/meuProgressoPaciente"
          element={<MeuProgressoPaciente />}
        ></Route>
        <Route path="/consultasPaciente" element={<ConsultaPaciente />} />
        <Route path="/questionarioPaciente" element={<QuestionarioPaciente/>} />
        <Route
          path="/receitasFavoritasPaciente"
          element={<ReceitasFavoritasPaciente />}
        />
        <Route path="chatPaciente" element={<ChatPaciente />} />
        <Route path="receitasPaciente" element={<ReceitasPaciente />} />
      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes
