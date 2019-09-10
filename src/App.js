import React from 'react';
import './App.css';
import Congrats from "./components/congrats/Congrats";
import GuessedWords from "./components/guessedWords/GuessedWords";

function App() {
  const showWords = true;
  const mockWords = showWords ?
  [
    { word: "river", match: 2 },
    { word: "sower", match: 1 },
    { word: "sorry", match: 3 },
    { word: "party", match: 5 },
  ] : [];
  return (
    <div className="App container">
      <h1>Jotto</h1>
      <Congrats success = { true } />
      <GuessedWords guessedWords = { mockWords }/>
    </div>
  );
}

export default App;
