import { useStore, actions } from "../store";
import { useRef } from "react";
import TodoItem from "./TodoItem";

function Todolist({ todos }) {
    // const [state, dispatch] = useStore();
    // const { todos, todoInput } = state;
    console.log(todos)
    return (
        <section className="main">
            <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {todos.map((todo, index) => {
                    return (<TodoItem
                        key={index}
                        todo={todo}
                        index={index}
                    />)
                })}
            </ul>
        </section>
    );
}

export default Todolist;