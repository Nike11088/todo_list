import React from 'react'
import MyButton from './MyButton'

const AddButton = ({ children, ...props }) => {
  return (
    <MyButton {...props} className="btn-success">
      <i className="bi bi-plus-circle"></i>
      {children}
    </MyButton>
  )
}

export default AddButton
