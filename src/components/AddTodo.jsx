
const AddTodo = () => {

    return (
        <div class="container items-container">
        <div class="row kg-row">
          <div class="col-6">
            <input type="text" placeholder='Enter Todo Here'/>
          </div>
          <div class="col-2">
            <input type="date" />
          </div>
          <div className="col-2 ">
       <button type='button' class="btn btn-success kg-button ">
            Add 
          </button>
          </div>
     
        </div>
      </div>
    )
}

export default AddTodo