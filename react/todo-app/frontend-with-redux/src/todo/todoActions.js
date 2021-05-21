import axios from "axios"

const URL = "http://localhost:3004/todo"

export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})

export const search = async () => {

  return (dispatch, getState) => {
    const description = getState().todo.description
    const search = description !== '' ? `&description_like=${description}` : ''
    axios.get(`${URL}?_sort=createdAt&_order=desc${search}`)
      .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
  }
}

export const add = (description) => {
  return dispatch => {
    if (description === '') return

    const todo = {
      description: description.trim(),
      done: false,
      createdAt: Date.now()
    }

    axios.post(URL, todo)
      .then(resp => dispatch(clear()))
      .then(_ => dispatch(search()))
  }
}

export const markAsDone = (todo) => {
  return dispatch => {
    axios.put(`${URL}/${todo.id}`, { ...todo, done: true })
      .then(_ => dispatch(search()))
  }
}

export const markAsPending = (todo) => {
  return dispatch => {
    axios.put(`${URL}/${todo.id}`, { ...todo, done: false })
      .then(_ => dispatch(search()))
  }
}

export const remove = (todo) => {
  return dispatch => {
    axios.delete(`${URL}/${todo.id}`)
      .then(_ => dispatch(search()))
  }
}

export const clear = () => {
  return [{ type: 'TODO_CLEAR' }, search()]
}