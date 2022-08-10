import { SET_TODO, ADD_TODO, DELETE_TODO } from "./constants"

const initState = {
    todos: [{ "title": "Html css", "completed": false }, { "title": "javascript", "completed": true }],
    todoInput: ''
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            const newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)
            return {
                ...state,
                todos: newTodos
            }
        default:
            throw new Error("Invalid action")
    }
}
export { initState }
export default reducer