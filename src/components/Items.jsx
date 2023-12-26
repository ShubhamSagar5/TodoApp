import React from 'react'
import Item from './Item'

const Items = ({itemList,onBtnClick}) => {
  return (
    <div className='items-container'>

    {
        itemList.map(item => <Item todoName={item.name} todoDate={item.dueDate} onBtnClick={onBtnClick}/>)
    }
   
   
   </div>
  )
}

export default Items