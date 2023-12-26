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
import WelcomeMess from './components/WelcomeMess'

function App() {
  
  const itemsList = [{
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
const [itemList,setItemList] = useState([])

const handleBtnClick = (todoName,dueDate) => {
  const newItem = [...itemList,{
    name:todoName,
    dueDate:dueDate
  }];

  setItemList(newItem)
}

const handleDeleBtnClick = (taskName) => {
    const newItem = itemList.filter(item => item.name !== taskName)
    setItemList(newItem)
  }
  
  return (
    <center>
    <Header/>
    <AppTodo onBtnClick={handleBtnClick}/>
    {
      itemList.length === 0 && <WelcomeMess/>
    }
    <Items itemList={itemList} onBtnClick={handleDeleBtnClick}/>

  

 
 
   
    </center>
  )
}

export default App
