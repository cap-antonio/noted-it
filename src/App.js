import React from 'react';
import './App.css';
import Header from './containers/header/Header';
import NotesContainer from './containers/NotesContainer/NotesContainer';


const App = () => {
  return (
    <div>
      <Header />
      <NotesContainer />
    </div>
  );
}


export default App;
