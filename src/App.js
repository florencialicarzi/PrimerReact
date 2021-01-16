import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css'; //Importa el estilo

import Navigation from './components/Navigation';
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
    const todos = this.state.todos.map((todo, i) =>{
      return(
        <div className= "col-md-4">
            <div className= "card mt-4">
              <div className="card-header">
                <h3>{todo.title}</h3>
                <span className="badge rounded-pill bg-danger">
                  {todo.priority}
                </span>
              </div> 
              <div className="card-body">                
                <p>Descripcion: {todo.description}</p>
                <p><mark>{todo.responsible}</mark></p>
              </div>
            </div>
          </div>
      )
    })
    console.log("Antes de renderizar los componentes")
    return (
      <div className="App">

        <Navigation titulo='Tareas pendientes' cantTodo= {this.state.todos.length} />

        <div className="container">
          <div className="row mt-5">
            {todos}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
