import { SET_TODO, ADD_TODO, DELETE_TODO, TOOGLE_TODO, TOOGLEALL_TODO } from "./constants"

const initState = {
    todos: [{ "title": "Html css", "completed": false }, { "title": "javascript", "completed": true }],
    todoInput: '',
    editIndex: null,
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            const TodosAfterAdd = [...state.todos]
            TodosAfterAdd.push({ title: action.payload, completed: false })
            return {
                ...state,
                todos: TodosAfterAdd
            }
        case DELETE_TODO:
            const TodosAfterDelete = [...state.todos]
            TodosAfterDelete.splice(action.payload, 1)
            return {
                ...state,
                todos: TodosAfterDelete
            }
        case TOOGLE_TODO:
            const todo = state.todos[action.payload]
            todo.completed = !todo.completed
            return {
                ...state,
            }
        case TOOGLEALL_TODO:
            const TodosAfterToogleAll = [...state.todos]
            TodosAfterToogleAll.forEach(todo => todo.completed = action.payload)
            return {
                ...state,
                todos: TodosAfterToogleAll
            }
        default:
            throw new Error("Invalid action")
    }
}
export { initState }
export default reducer