import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Greeting } from './components/Greeting'
import Personnages from './components/personnages'
import Home from './components/Home'
import Amiibo from './components/amiibo'



function App() {
  return (
    <>
    <div>
    <Greeting name="User"/>
    </div>
    <BrowserRouter>
    <nav>
        <Link to="/">Accueil</Link> | <Link to="/personnages">Personnages</Link> | <Link to="/amiibo">Amiibo</Link>
      </nav>
      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/personnages" Component={Personnages} />
      <Route path="/amiibo" Component={Amiibo} />
      </Routes>
        
    </BrowserRouter>

    </>
  )
}

   

export default App
