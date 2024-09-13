import React from 'react';
import './App.css';
import Todolist from './components/Todolist';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos</h1>
      </header>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
