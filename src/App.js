import React from 'react';
import './App.css';
import Header from './containers/header/Header';
import NotesContainer from './containers/NotesContainer/NotesContainer';
import About from './containers/About/About';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Route component = {NotesContainer} exact path = "/"/>
      <Route component = {About} path = "/about" />
    </BrowserRouter>
  );
}


export default App;
