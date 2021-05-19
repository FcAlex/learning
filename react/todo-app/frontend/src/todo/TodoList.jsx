import IconButton from "../components/IconButton"

const TodoList = (props) => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo.id}>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton hide={todo.done}
            styleBtn="success"
            icon="check"
            onClick={() => props.handleMarkAsDone(todo)} />
          <IconButton hide={!todo.done}
            styleBtn="warning"
            icon="undo"
            onClick={() => props.handleMarkAsPending(todo)} />
          <IconButton hide={!todo.done}
            styleBtn="danger"
            icon="trash-o"
            onClick={() => props.handleRemove(todo)} />
        </td>
      </tr>
    ))
  }

  return (
    <table className="table">
      <thead className="table-header">
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

export default TodoList