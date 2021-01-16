import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return(  
            <nav className= "navbar navbar-dark bg-dark">
                <a href='' className= 'text-white'>
                    {this.props.titulo}
                </a>
                <span class="badge bg-light text-dark ml-2">
                    {this.props.cantTodo}
                </span>
            </nav>
        )
    }
}

export default Navigation;