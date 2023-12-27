import React, { useContext } from 'react'
import { ToDoItemsContext } from '../store/ToDoItemsStore'

const WelcomeMess = () => {
  
  const {items}  = useContext(ToDoItemsContext)

  return (
    <div>
      {
        items.length === 0 &&   <p className='WelcomeMess'>Enjoy Youy Day</p>
      }
    </div>
  )
 

}

export default WelcomeMess