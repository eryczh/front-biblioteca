import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import FuncaoAdm from './pages/funcaoAdm';
import CriarLivro from './pages/CriarLivro';
import Visualizacao from './pages/VizualizarLivros';
import VerificarLivros from './pages/VerificarLivros';
import EsqueceuSenha from './pages/EsqueciSenha';
import CriarConta from './pages/CriarConta';
import EditarLivro from './components/EditarLivros';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/esqueceu_senha' element={<EsqueceuSenha />}/>
        <Route path='/cadastrar' element={<CriarConta />} />
        <Route path='/funcao_admin' element={<FuncaoAdm />} />
        <Route path='/add_livro' element={<CriarLivro />}/>
        <Route path='/visualizacao/:itemId' element={< Visualizacao/>} />
        <Route path='/ver_livros' element={< VerificarLivros/>}/>
        <Route path='/editar_item/:itemId' element={< EditarLivro/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);