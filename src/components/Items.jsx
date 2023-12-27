import React, { useContext } from 'react'
import Item from './Item'
import { ToDoItemsContext } from '../store/ToDoItemsStore'

const Items = () => {
  
  const {items} = useContext(ToDoItemsContext)

  return (
    <div className='items-container'>

    {
        items.map(item => <Item todoName={item.name} todoDate={item.dueDate} />)
    }
   
   
   </div>
  )
}

export default Items