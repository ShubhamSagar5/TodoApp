import React from 'react'
import Item from './Item'

const Items = ({itemList}) => {
  return (
    <div className='items-container'>

    {
        itemList.map(item => <Item todoName={item.name} todoDate={item.dueDate}/>)
    }
   
   
   </div>
  )
}

export default Items