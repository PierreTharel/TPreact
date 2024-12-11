import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Greeting } from './components/Greeting'
import { Card } from './components/Card'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <nav>
        <Link to="/">Accueil</Link> | <Link to="/about">Personnages</Link> | <Link to="/about">Jeux</Link>
      </nav>
        
    </BrowserRouter>


    <div>
    <Greeting name="User"/>
    </div>


    <div>
    <Card>
      <h2>Nouveau jeu Mario : Super Mario Party Jamboree</h2>
      <p>Le nouveau jeu de plateau de Mario enfin disponible sur Nintendo Switch.</p>
    </Card>

    <Card>
      <h2>Nouveau jeu Zelda : The Legend Of Zelda Echoes Of Wisdom</h2>
      <p>Partez à l'aventure avec Zelda sur Nintendo Switch.</p>
    </Card>
    </div>


      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 100)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
