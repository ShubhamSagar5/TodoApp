import React, { useContext } from 'react'
import { ToDoItemsContext } from '../store/ToDoItemsStore'

const Item = ({todoDate,todoName}) => {
  
   const {deleteTask} = useContext(ToDoItemsContext)
  
    return (
    <div class="container ">
    <div class="row kg-row">
      <div class="col-6">
       {todoName}
      </div>
      <div class="col-4">
        {todoDate}
      </div>
      <div class="col-2">
   <button type='button' class="btn btn-danger kg-button" onClick={() => deleteTask(todoName)}>
        Delete
      </button>
      </div>
 
    </div>
  </div>
  )
}

export default Item