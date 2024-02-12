import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyBtn from './Components/Button';
import MyHeader from './Components/Header';
import MySidebar from './Components/Leftsidebar';
import MyRightcont from './Components/Topcontainer';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyBtn/>
    <MyHeader/>
    <MySidebar/>
    <MyRightcont/>
  </React.StrictMode>,
)
