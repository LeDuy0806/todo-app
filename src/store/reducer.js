import * as CONST_TODO from "./constants"

const initState = {
    todos: [{ "title": "Html css", "completed": false }, { "title": "javascript", "completed": true }],
    todoInput: '',
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed,
    },
    editIndex: null,
}

function reducer(state, action) {
    switch (action.type) {
        case CONST_TODO.SET_TODO:
            return {
                ...state,
                todoInput: action.payload
            }
        case CONST_TODO.ADD_TODO:
            const TodosAfterAdd = [...state.todos]
            TodosAfterAdd.push({ title: action.payload, completed: false })
            return {
                ...state,
                todos: TodosAfterAdd
            }
        case CONST_TODO.DELETE_TODO:
            const TodosAfterDelete = [...state.todos]
            TodosAfterDelete.splice(action.payload, 1)
            return {
                ...state,
                todos: TodosAfterDelete
            }
        case CONST_TODO.TOOGLE_TODO:
            const todo = state.todos[action.payload]
            todo.completed = !todo.completed
            return {
                ...state,
            }
        case CONST_TODO.TOOGLEALL_TODO:
            const TodosAfterToogleAll = [...state.todos]
            TodosAfterToogleAll.forEach(todo => todo.completed = action.payload)
            return {
                ...state,
                todos: TodosAfterToogleAll
            }
        case CONST_TODO.START_EDIT:
            state.editIndex = action.payload
            state.todoInput = state.todos[action.payload].title
            return {
                ...state,
            }
        case CONST_TODO.END_EDIT:
            if (state.editIndex !== null) {
                if (action.payload) {
                    state.todos[state.editIndex].title = action.payload
                    state.todoInput = ''
                    state = {
                        ...state,
                    }
                } else {
                    const TodosAfterDelete = [...state.todos]
                    TodosAfterDelete.splice(state.editIndex, 1)
                    state = {
                        ...state,
                        todos: TodosAfterDelete
                    }
                }
                state.editIndex = null
            }
            return state
        case CONST_TODO.STOP_EDIT:
            if (state.editIndex !== null) {
                state.editIndex = null
                state.todoInput = ''
            }
            return {
                ...state,
            }
        case CONST_TODO.SWITCH_FILTER:
            state.filter = action.payload
            return {
                ...state
            }
        case CONST_TODO.CLEAR_COMPLETED:
            state.todos = state.todos.filter(state.filters.active)
            return {
                ...state
            }
        default:
            throw new Error("Invalid action")
    }
}
export { initState }
export default reducer