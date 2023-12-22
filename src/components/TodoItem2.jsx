import React from 'react'

const TodoItem2 = () => {
  
    const todoName =" Go to College"
    const todoDate = '4/10/2023'
  
    return (
    <div>
           <div class="container ">
      <div className="row kg-row">
        <div class="col-6">
         {todoName}
        </div>
        <div class="col-2">
          {todoDate}
        </div>
        <div class="col-2">
     <button type='button' class="btn btn-danger kg-button">
          Delete
        </button>
        </div>
   
      </div>
    </div>
    </div>
  )
}

export default TodoItem2