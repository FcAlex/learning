import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import IconButton from "../components/IconButton"
import { markAsDone, markAsPending, remove } from './todoActions'

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
            onClick={() => props.markAsDone(todo)} />
          <IconButton hide={!todo.done}
            styleBtn="warning"
            icon="undo"
            onClick={() => props.markAsPending(todo)} />
          <IconButton hide={!todo.done}
            styleBtn="danger"
            icon="trash-o"
            onClick={() => props.remove(todo)} />
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
const mapDispatchToProps = dispatch => 
  bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
const mapStateToProps = state => ({list: state.todo.list})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)