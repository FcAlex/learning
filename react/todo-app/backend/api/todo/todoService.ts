import todo from './todo'

todo.methods(['get', 'post', 'put', 'delete'])
todo.updateOptions({new: true, runValidators: true})

export default todo
