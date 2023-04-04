import React from 'react'
import TodoItem from './TodoItem'

const TodoItemsList = ({ items, remove }) => {
  return (
    <div>
      {items.map((item) => (
        <TodoItem key={item.id} todoItem={item} remove={() => remove(item.id)} />
      ))}
    </div>
  )
}

export default TodoItemsList
