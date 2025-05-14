import { Route, Routes } from 'react-router-dom';
import './App.css';
import Accueilpage from './pages/accueil/Accueilpage';
import DomainePage from './pages/domaine/DomainePage';
import FormationPage from './pages/formation/FormationPage';
import PlaylistePage from './pages/playListe/PlaylistePage';
import ListeVideoPage from './pages/listeVidéo/ListeVideoPage';
import FormationDetailPage from './pages/formation/FormationDetailPage';

function App() {
  return (
      // mes routes
      <Routes>
        <Route path="/" element={<Accueilpage />} />
        <Route path="/domaines" element={<DomainePage />} />
        <Route path="/domaines/formation" element={<FormationPage />} />
        <Route path="/domaines/formation/:id" element={<FormationDetailPage />} />
        <Route path="/formation/:idFormation" element={<PlaylistePage />} />
        <Route path="/lecture/:idFormation/:idVideo" element={<ListeVideoPage />} />
    </Routes>
  );
}

export default App;
