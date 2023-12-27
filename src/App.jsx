import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import AppTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import Item from "./components/Item";
import Items from "./components/Items";
import WelcomeMess from "./components/WelcomeMess";
import { ToDoItemsContext } from "./store/ToDoItemsStore";

function App() {
  const itemsList = [
    {
      name: "Buy The Milk",
      dueDate: "4/12/2023",
    },
    {
      name: "Go to college",
      dueDate: "4/12/2023",
    },
    {
      name: "Go to market",
      dueDate: "4/12/2023",
    },
  ];
  const [itemList, setItemList] = useState([]);

  const addNewTasks = (todoName, dueDate) => {
    const newItem = [
      ...itemList,
      {
        name: todoName,
        dueDate: dueDate,
      },
    ];

    setItemList(newItem);
  };

  const deleteTasks = (taskName) => {
    const newItem = itemList.filter((item) => item.name !== taskName);
    setItemList(newItem);
  };

  return (
    <ToDoItemsContext.Provider value={{
      items:itemList,
      addTask:addNewTasks,
      deleteTask:deleteTasks
    }}>
      <center>
        <Header />
        <AppTodo  />
        <WelcomeMess />
        <Items  />
      </center>
    </ToDoItemsContext.Provider>
  );
}

export default App;
