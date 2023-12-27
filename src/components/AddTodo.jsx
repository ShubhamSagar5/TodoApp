import { useRef, useState } from "react"

const AddTodo = ({onBtnClick}) => {

  // const [todoName,setTodoName] = useState()
  // const [dueDate,setDueDate] = useState()

  const todoNameElement = useRef()
  const dueDateElement = useRef()


  // const handleToDoName = (e) => {
  //   setTodoName(e.target.value)
  // }

  // const handleDueDate = (e) => {
  //   setDueDate(e.target.value)
  // }

  const handleData = (e) => {
    e.preventDefault()
    const todoName = todoNameElement.current.value
    const dueDate = dueDateElement.current.value
    // console.log(todoName)
   
    // setTodoName("")
    // setDueDate("")
    todoNameElement.current.value =''
    dueDateElement.current.value=''
     onBtnClick(todoName,dueDate)
  }

    return (
        <div class="container items-container">
        <form onSubmit={handleData} >
        <div class="row kg-row">
          <div class="col-6">
            <input type="text" placeholder='Enter Todo Here' ref={todoNameElement}/>
          </div>
          <div class="col-4">
            <input type="date" ref={dueDateElement}/>
          </div>
          <div className="col-2 ">
       <button type='submit' class="btn btn-success kg-button " >
            Add 
          </button>
          </div>
     
        </div>
        </form>
      </div>
    )
}

export default AddTodo