import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Cardapio from './components/pages/Cardapio';

import './App.css';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component=
      {Home} />
      <Route path="/contato" exact component=
      {Contato} />
      <Route path="/cardapio" exact component=
      {Cardapio} />
    </Switch>
    <Footer />
    </Router>
    </>
  );
}

export default App;
