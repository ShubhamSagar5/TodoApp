import { createContext } from "react";


export const ToDoItemsContext = createContext({
    items:[],
    addTask: () => {},
    deleteTask: ()=>{}
})