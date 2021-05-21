import { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import IconButton from "../components/IconButton"
import { changeDescription, search, add, clear } from "./todoActions"

class TodoForm extends Component {

  constructor(props) {
    super(props)

    this.keyHandler = this.keyHandler.bind(this)
  }

  keyHandler(e) {
    const { add, search, description, clear } = this.props
    if (e.key === "Enter") {
      e.shiftKey ? search() : add(description)
    } else if (e.key === "Escape") {
      clear()
    }
  }

  UNSAFE_componentWillMount() {
    this.props.search()
  }

  render() {
    const { add, search, clear } = this.props
    return (
      <div role="form" className="todoForm">
        <input 
          type="text" 
          id="description" 
          className="search" 
          placeholder="Adicione uma tarefa" 
          value={this.props.description} 
          onChange={this.props.changeDescription} 
          onKeyUp={this.keyHandler} />

        <div className="btnTodo">
          <IconButton styleBtn="primary" icon="plus" onClick={add} />
          <IconButton styleBtn="info" icon="search" onClick={search} />
          <IconButton styleBtn="default" icon="close" onClick={clear} />
        </div>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => 
  bindActionCreators({ changeDescription, search, add, clear }, dispatch)

const mapStateToProps = state => ({ description: state.todo.description })
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)