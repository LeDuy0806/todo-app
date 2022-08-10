import { SET_TODO, ADD_TODO, DELETE_TODO, TOOGLE_TODO, TOOGLEALL_TODO } from "./constants"

export const setTodo = payload => {
    return {
        type: SET_TODO,
        payload
    }
}
export const addTodo = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}
export const deleteTodo = payload => {
    return {
        type: DELETE_TODO,
        payload
    }
}
export const toggleTodo = payload => {
    return {
        type: TOOGLE_TODO,
        payload
    }
}
export const toggleAllTodo = payload => {
    return {
        type: TOOGLEALL_TODO,
        payload
    }
}