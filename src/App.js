import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css'; //Importa el estilo

import Navigation from './components/Navigation';
import { todos } from './todos.json';
import TodoForm from './components/TodoForm';


//Esto no es html, es JSX
class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
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
              <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Eliminar
              </button>
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
          <div className="row mt-4">

            <div className="col-md-4 text-center">
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
