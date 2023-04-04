import React, { useState } from 'react'
import MyButton from './UI/buttons/MyButton'
import MyInput from './UI/input/MyInput'

const TodoItem = ({ todoItem, remove }) => {
  const [item, setItem] = useState(todoItem.text)

  const valueChange = (value) => {
    setItem(value)
  }

  const editClick = () => {
    console.log('editClick')
  }

  return (
    <div className="d-flex justify-content-center mb-2">
      <MyInput value={item} onChange={(e) => valueChange(e.target.value)} />
      <MyButton onClick={() => editClick()} className="btn-success me-2">
        <i className="bi bi-pencil-fill"></i>
      </MyButton>
      <MyButton onClick={() => remove()} className="btn-danger">
        <i className="bi bi-trash3-fill"></i>
      </MyButton>
    </div>
  )
}

export default TodoItem
