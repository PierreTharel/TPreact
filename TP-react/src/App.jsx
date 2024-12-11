import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Greeting } from './components/Greeting'
import Personnages from './components/personnages'
import Home from './components/Home'
import Jeux from './components/jeux'
import { useState, useEffect } from "react";
import axios from "axios";



function App() {
  return (
    <>
    <div>
    <Greeting name="User"/>
    </div>
    <BrowserRouter>
    <nav>
        <Link to="/">Accueil</Link> | <Link to="/personnages">Personnages</Link> | <Link to="/jeux">Jeux</Link>
      </nav>
      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/personnages" Component={Personnages} />
      <Route path="/jeux" Component={Jeux} />
      </Routes>
        
    </BrowserRouter>

    </>
  )
}

export default App
