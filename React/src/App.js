// import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import NotFound from './components/views/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Principal from './components/views/Presentacion';
import Footer from './components/views/Footer';
import GamesId from './components/views/VideoGamesId';

function App() {
  return (
        
        <Router>
           <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Principal />} exact />
              <Route path="/videogames/:id" element={<GamesId/>} />
              <Route path="/search/:id" element={<Principal />} />
              {/* <Route path="/adminGames/" element={<Form />} />  */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </Router>
        
      );
}

export default App;


