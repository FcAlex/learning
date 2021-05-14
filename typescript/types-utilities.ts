type Todo = {
    title: string,
    description: string,
    completed: boolean
}

// Readonly (apenas leitura)
const todo: Readonly<Todo> = {
    title: "Ler livro",
    description: "Aprender mais",
    completed: false 
}

console.log(todo)

// todo.completed = true erro

// Partial (representa uma parte)
function updateTodo(todo: Todo, fieldsUpdate: Partial<Todo>) {
    return { ...todo,  ...fieldsUpdate}
}

const todo2: Todo = updateTodo(todo, { completed: true })


// Pick (pegar partes do tipo passado)
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: "Estudar Typescript",
    completed: true   
}

// Omit (omite o que for informado)
type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview = {
    title: "Estudar Typescript",
    completed: true   
}