import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

import Home from './componentes/Home';
import Listar from './componentes/Listar';
import Editar from './componentes/Editar';
import Agregar from './componentes/Agregar';
import Boleta from './componentes/Boleta';
class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <nav class="navbar navbar-expand-lg navbar navbar-custom">
            <div class="abs-center">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link" to="/">E-Voting</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="Agregar">Registro</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="Listar">Listar</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="Editar">Editar</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="Boleta">Boleta Electoral</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="Listar" element={<Listar />} />
            <Route exact path="Editar/:id" element={<Editar />} />
            <Route exact path="Agregar" element={<Agregar />} />
            <Route exact path="Boleta" element={<Boleta />} />

          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
