import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from "./pages/Listing";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";
import Navbar from "./components/Navbar";
import Curriculo from "./pages/Curriculo";
import Found from "./pages/Found";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/projetos">
          <Route path=":body" element={<Projetos />} />
        </Route>
        <Route path="/sobre">
          <Route path=":h1" element={<Sobre />} />
        </Route>
        <Route path="/curriculo">
          <Route path=":body" element={<Curriculo />} />
        </Route>
        <Route path="/found">
          <Route path=":body" element={<Found />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;  