import React, { useEffect, useState } from 'react'
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import CreateItemInput from './components/CreateItemInput'
import TodoItemsList from './components/TodoItemsList'

function App() {
  const [items, setItems] = useState([])
  // const [items, setItems] = useState([
  //   { id: 1, text: 'Todo 1' },
  //   { id: 2, text: 'Todo 2' },
  //   { id: 3, text: 'Todo 3' },
  //   { id: 4, text: 'Todo 4' },
  //   { id: 5, text: 'Todo 5' },
  // ])

  useEffect(() => {
    const items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
    setItems(items)
  }, [])

  useEffect(() => {
    debugger
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  const createItem = (text) => {
    if (text === '') return

    const item = {
      id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
      text: text,
    }

    setItems([...items, item])

    // localStorage.setItem('items', JSON.stringify(items))

    console.log(items)
  }

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className="App">
      <div className="container">
        <h2 className="text-uppercase text-center mt-3 mb-3">Список задач</h2>
        <CreateItemInput create={(value) => createItem(value)} />
        <TodoItemsList items={items} remove={(id) => removeItem(id)} />
      </div>
    </div>
  )
}

export default App
