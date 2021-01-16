//Bibliotecas necesarias
import React from 'react';
import ReactDOM from 'react-dom'; //Para web

import './index.css';//Importa css para transformarlos por webpack
import App from './App'; //Arranque para el archivo donde está el código
import reportWebVitals from './reportWebVitals'; //Server

ReactDOM.render( 
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);
//Inicia la App que importamos arriba, con Mayuscula.}
//El id 'root' corresponde al div incluido en el index.html

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
