import { useEffect, useState } from 'react'
import PageHeader from './../components/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import axios from 'axios'

const URL = "http://localhost:3004/todo"

const Todo = (props) => {
  const [description, setDescription] = useState('')
  const [list, setList] = useState([])

  useEffect(reflesh, [])

  function reflesh(description = '') {
    const search = description !== '' ? `&description_like=${description}` : ''

    if(!search) console.log(`${URL}?_sort=createdAt${search}`)

    axios.get(`${URL}?_sort=createdAt${search}`)
      .then(result => {
        setDescription(description)
        setList(result.data)
      })
  }

  function handleAdd() {
    if(description === '') return

    const todo = {
      description,
      done: false,
      createdAt: Date.now()
    }

    axios.post(URL, todo)
      .then(_ => {
        reflesh()
      })
  }

  function handleChange(e) {
    setDescription(e.target.value)
  }

  function handleRemove(todo) {
    axios.delete(`${URL}/${todo.id}`)
      .then(_ => reflesh(description))
  }

  function handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo.id}`, { ...todo, done: true })
      .then(_ => reflesh(description))
  }

  function handleMarkAsPending(todo) {
    axios.put(`${URL}/${todo.id}`, { ...todo, done: false })
      .then(_ => reflesh(description))
  }

  function handleClear() {
    reflesh()
  }

  function handleSearch() {
    reflesh(description)
  }

  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm handleAdd={handleAdd} handleChange={handleChange} description={description} handleClear={handleClear} handleSearch={handleSearch}/>
      <TodoList list={list} handleRemove={handleRemove} handleMarkAsDone={handleMarkAsDone} handleMarkAsPending={handleMarkAsPending} />
    </div>
  )
}

export default Todo