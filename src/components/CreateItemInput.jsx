import React, { useState } from 'react'
import AddButton from './UI/buttons/AddButton'
import MyInput from './UI/input/MyInput'

const CreateItemInput = ({ create }) => {
  const [text, setText] = useState('')

  const createItemClick = () => {
    create(text)
    setText('')
  }

  const onValueChange = (value) => {
    setText(value)
  }

  return (
    <div className="d-flex justify-content-center mt-2 mb-5">
      <MyInput value={text} onChange={(e) => onValueChange(e.target.value)} />
      <AddButton onClick={() => createItemClick()} />
    </div>
  )
}

export default CreateItemInput
