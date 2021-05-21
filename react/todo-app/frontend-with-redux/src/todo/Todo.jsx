import PageHeader from './../components/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
const Todo = _ => {

  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default Todo