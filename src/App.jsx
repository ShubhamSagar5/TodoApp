import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AppTodo from './components/AddTodo'
import TodoItem1 from './components/TodoItem1'
import TodoItem2 from './components/TodoItem2'
import Item from './components/Item'
import Items from './components/Items'

function App() {
  
  const itemList = [{
    name:"Buy The Milk",
    dueDate:"4/12/2023",

  },
  {
    name:"Go to college",
    dueDate:"4/12/2023",

  },
  {
    name:"Go to market",
    dueDate:"4/12/2023",

  },
  
]

  return (
    <center>
    <Header/>
    <AppTodo/>
    <Items itemList={itemList}/>

  

 
 
   
    </center>
  )
}

export default App
