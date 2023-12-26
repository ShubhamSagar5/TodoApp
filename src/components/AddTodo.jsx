import { useState } from "react"

const AddTodo = ({onBtnClick}) => {

  const [todoName,setTodoName] = useState()
  const [dueDate,setDueDate] = useState()


  const handleToDoName = (e) => {
    setTodoName(e.target.value)
  }

  const handleDueDate = (e) => {
    setDueDate(e.target.value)
  }

  const handleData = () => {
    onBtnClick(todoName,dueDate)
    setTodoName("")
    setDueDate("")
  }

    return (
        <div class="container items-container">
        <div class="row kg-row">
          <div class="col-6">
            <input type="text" placeholder='Enter Todo Here' onChange={handleToDoName} value={todoName}/>
          </div>
          <div class="col-4">
            <input type="date" onChange={handleDueDate} value={dueDate}/>
          </div>
          <div className="col-2 ">
       <button type='button' class="btn btn-success kg-button " onClick={handleData}>
            Add 
          </button>
          </div>
     
        </div>
      </div>
    )
}

export default AddTodo