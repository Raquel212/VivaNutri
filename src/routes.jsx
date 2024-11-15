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
import EditarPaciente from "./pages/EditarPaciente"
import GerenciarMental from "./pages/GerenciarMental"
import GerenciarPlanosAlimentares from "./pages/GerenciarPlanosAlimentares"
import ConsultaNutriPsico from "./pages/ConsultaNutriPsico/index"
import ConsultaPsico from "./pages/ConsultaPsico"
import HomePsico from "./pages/HomePsico"
import AdicionarReceitaNutri from "./pages/AdicionarReceitaNutri"
import AnalisarProgressoPsico from "./pages/AnalisarProgressoPsico"
import AnalisarProgressoNutri from "./pages/AnalisarProgressoNutri"
import ChatNutri from "./pages/ChatNutri"
import ChatPsico from "./pages/ChatPsico"
import EditarNutri from "./pages/EditarNutri"
import EditarPsico from "./pages/EditarPsico"
import GerenciarClienteNutri from "./pages/GerenciarClienteNutri"
import GerenciarClientePsico from "./pages/GerenciarClientesPsico"
import QuestionarioNutri from "./pages/QuestionarioNutri"
import QuestionarioPsico from "./pages/QuestionarioPsico"
import VerPerfilNutri from "./pages/VerPerfilNutri"
import VerPerfilPsico from "./pages/VerPerfilPsico"
import Notificacao from "./pages/Notificacao"
import PlanosNutri from "./pages/PlanosNutri"
import PlanoBemEstar from "./pages/PlanoBemEstar"
import NotificacaoPsico from "./pages/NotificacaoPsico"
import NotificacaoPaciente from "./pages/Paciente/NotificacaoPaciente"

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
        <Route path="/chatPaciente" element={<ChatPaciente />} />
        <Route path="/receitasPaciente" element={<ReceitasPaciente />} />
        <Route path="/EditarPaciente" element={<EditarPaciente />} />
        <Route path="/ConsultaNutriPsico" element={<ConsultaNutriPsico />} />
        <Route
          path="/GerenciarPlanosAlimentares"
          element={<GerenciarPlanosAlimentares />}
        />
        <Route path="/homePsico" element={<HomePsico />} />
        <Route path="/consultaPsico" element={<ConsultaPsico />} />
        <Route path="/gerenciarMental" element={<GerenciarMental />} />
        <Route path="/receitasNutri" element={<AdicionarReceitaNutri />} />
        <Route path="/analisarProgresso" element={<AnalisarProgressoPsico/>} />
        <Route path="/analisarProgressoPsico" element={<AnalisarProgressoNutri/>} />
        <Route path="/chatNutri" element={<ChatNutri/>} />
        <Route path="/chatPsico" element={<ChatPsico/>} />
        <Route path="/EditarNutri" element={<EditarNutri/>} />
        <Route path="/EditarPsico" element={<EditarPsico/>} />
        <Route path="/gerenciarClientesNutri" element={<GerenciarClienteNutri/>} />
        <Route path="/gerenciarClientesPsico" element={<GerenciarClientePsico/>} />
        <Route path="/questionariosNutri" element={<QuestionarioNutri/>} />
        <Route path="/questionarioPsico" element={<QuestionarioPsico/>} />
        <Route path="/verPerfilNutri" element={<VerPerfilNutri/>} />
        <Route path="/verPerfilPsico" element={<VerPerfilPsico/>} />
        <Route path="/notifications" element={<Notificacao/>} />
        <Route path="/planosNutri" element={<PlanosNutri/>} />
        <Route path="/planoBemEstar" element={<PlanoBemEstar/>} />
        <Route path="/notificationsPsico" element={<NotificacaoPsico/>} />
        <Route path="/notificationsPaci" element={<NotificacaoPaciente/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes
