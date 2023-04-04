import React from 'react'

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} type="button" className={'btn' + ` ${props.className}` || ''}>
      {children}
    </button>
  )
}

export default MyButton
