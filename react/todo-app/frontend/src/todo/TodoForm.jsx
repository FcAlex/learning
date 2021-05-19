import IconButton from "../components/IconButton"

const TodoForm = (props) => {

  function keyHandler(e) {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === "Escape") {
      props.handleClear()
    }
  }

  return (
    <div role="form" className="todoForm">
      <input type="text" id="description" className="search" placeholder="Adicione uma tarefa" value={props.description} onChange={props.handleChange} onKeyUp={keyHandler} />

      <div className="btnTodo">
        <IconButton styleBtn="primary" icon="plus" onClick={props.handleAdd} />
        <IconButton styleBtn="info" icon="search" onClick={props.handleSearch} />
        <IconButton styleBtn="default" icon="close" onClick={props.handleClear} />
      </div>
    </div>
  )
}

export default TodoForm