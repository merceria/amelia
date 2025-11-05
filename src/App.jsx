import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./pagina/inicio";
import MarcoTeorico from "./pagina/marcoT";
import MA from "./pagina/modeloA";
import MC from "./pagina/modeloC";
import POO from "./pagina/poo";
import Video from "./pagina/video";

export default function App(){
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Empresa</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/marco-teorico">Marco Teórico</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/modelo-ambiental">Modelo Ambiental</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/modelo-comportamiento">Modelo de Comportamiento</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/poo">POO</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/video">Video</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/marco-teorico" element={<MarcoTeorico />} />
          <Route path="/modelo-ambiental" element={<MA />} />
          <Route path="/modelo-comportamiento" element={<MC />} />
          <Route path="/poo" element={<POO />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </div>
    </>
  );
}
