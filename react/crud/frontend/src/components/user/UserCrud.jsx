import { useEffect, useState } from "react"
import Main from "../templates/Main"
import axios from 'axios'

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const URL = 'http://localhost:3001/users'
const initialState = {
  user: { name: '', email: '' },
  list: []
}

const UserCrud = props => {

  const [state, setState] = useState(initialState)

  useEffect(() => {
    axios(URL).then(resp => {
      setState({ ...state, list: resp.data })
    })
  }, [])

  function load(user) {
    setState({ ...state, user })
  }

  function remove(user) {
    axios.delete(`${URL}/${user.id}`).then(resp => {
      const list = getUpdatedList(user, false)
      setState({ ...state, list })
    })
  }

  function renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    )
  }

  function renderRows() {
    return state.list.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning" onClick={() => load(user)}>
              <i className="fa fa-pencil"></i>
            </button>

            <button className="btn btn-danger mx-2" onClick={() => remove(user)}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      )
    })
  }

  function clear() {
    setState({ ...state, user: initialState.user })
  }

  function save() {
    const user = state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${URL}/${user.id}` : URL
    axios[method](url, user).then(resp => {
      const list = getUpdatedList(resp.data)
      setState({ ...state, user: initialState.user, list})
    })
  }

  function getUpdatedList(user, add = true) {
    const list = state.list.filter(u => u.id !== user.id)
    if(add) list.unshift(user)
    return list
  }

  function updateField(event) {
    const user = { ...state.user }
    user[event.target.name] = event.target.value
    setState({ ...state, user })
  }

  function renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input type="text" 
                className="form-control" 
                name="name" 
                value={state.user.name} 
                onChange={updateField}
                placeholder="Digite o nome" />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Email</label>
              <input type="email" 
                className="form-control" 
                name="email" value={state.user.email}
                onChange={updateField} 
                placeholder="Digite o email" />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={save}>
              Salvar
            </button>

            <button className="btn btn-secondary mx-2" onClick={clear}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Main {...headerProps}>
      {renderForm()}
      {renderTable()}
    </Main>
  )
}

export default UserCrud