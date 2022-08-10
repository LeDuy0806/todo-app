import Header from "./Header";
import Todolist from "./Todolist";
import Footer from "./Footer";

import { useStore } from "../store";

function TodoApp() {
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;
    return (
        <section className="todoapp">
            <Header dispatch={dispatch} todoInput={todoInput} />
            {todos.length > 0 ? <Todolist todos={todos} dispatch={dispatch} /> : undefined}
            {todos.length > 0 ? <Footer /> : undefined}
        </section>
    );
}

export default TodoApp;