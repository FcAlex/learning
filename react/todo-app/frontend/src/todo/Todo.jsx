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

    function reflesh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(result => {
                setDescription('')
                setList(result.data)
            })
    }

    function handleAdd() {
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
            .then(_ => reflesh())
    }

    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro"/>
            <TodoForm handleAdd={handleAdd} handleChange={handleChange} description={description}/>
            <TodoList list={list} handleRemove={handleRemove}/>
        </div>
    )
}

export default Todo