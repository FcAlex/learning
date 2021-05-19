import Grid from "../components/Grid"
import IconButton from "../components/IconButton"

const TodoForm = (props) => {
    return (
        <div role="form" className="todoForm row">
            <Grid cols="12 9 10">
                <input type="text" id="description" className="form-control" placeholder="Adicione uma tarefa" value={props.description} onChange={props.handleChange}/>
            </Grid>

            <Grid cols="12 3 2">
                <IconButton styleBtn="primary" icon="plus" onClick={props.handleAdd}/>
            </Grid>
        </div>
    )
}

export default TodoForm