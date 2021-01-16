import React, { Component } from 'react';



  class Cards extends Component{
    render(){
        const todos = this.props.mapeo((todo, i) =>{
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

        return(

            <div className="container">
                <div className="row mt-5">
                    {todos}
                </div>
            </div>
        )
      }

  }

  export default Cards