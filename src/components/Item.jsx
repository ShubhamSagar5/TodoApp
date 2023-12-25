import React from 'react'

const Item = ({todoDate,todoName}) => {
  
   
  
    return (
    <div class="container ">
    <div class="row kg-row">
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
  )
}

export default Item