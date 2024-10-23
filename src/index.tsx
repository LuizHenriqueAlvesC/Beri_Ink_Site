import React from 'react';
import ReactDOM from 'react-dom/client'; // Importando a versão nova do ReactDOM
import App from './App'; // Importando o componente principal da sua aplicação
import reportWebVitals from './reportWebVitals'; // Importando a função para medir a performance

// Criando o elemento raiz
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Referenciando o elemento HTML com id 'root'
);

// Renderizando a aplicação dentro do elemento raiz
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// Função opcional para medir a performance da aplicação
reportWebVitals();