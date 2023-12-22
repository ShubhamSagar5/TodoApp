import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AppTodo from './components/AddTodo'
import TodoItem1 from './components/TodoItem1'
import TodoItem2 from './components/TodoItem2'

function App() {
  

  return (
    <center>
    <Header/>
    <AppTodo/>
    <div className='items-container'>
   <TodoItem1/>
    <TodoItem2/>
    </div>
 
 
   
    </center>
  )
}

export default App
