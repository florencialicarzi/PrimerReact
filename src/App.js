import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css'; //Importa el estilo

import Navigation from './components/Navigation';
import Cards from './components/Cards';
import { todos } from './todos.json';

//Esto no es html, es JSX
class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: todos
    }
  }
  render(){
    
    console.log("Antes de renderizar los componentes")
    return (
      <div className="App">

        <Navigation titulo='Tareas pendientes' cantTodo= {this.state.todos.length} />

        <Cards mapeo= {this.state.todos.map}></Cards>
      </div>
    );
  }
}

export default App;
