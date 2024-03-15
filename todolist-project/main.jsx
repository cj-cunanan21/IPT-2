import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyButton from './Components/button';
import MyParagraph from './Components/Paragraph';
import MyApp from './Components/App';
import TodoList from './Components2/TodoList';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

     <TodoList/>
    <MyParagraph/>
       
    
  </React.StrictMode>,
)
