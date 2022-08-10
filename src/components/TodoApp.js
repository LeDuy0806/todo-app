import Header from "./Header";
import Todolist from "./Todolist";
import Footer from "./Footer";

import { useStore, actions } from "../store";
import { useRef } from "react";

function TodoApp() {
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;
    return (
        <section className="todoapp">
            <Header />
            {todos.length > 0 ? <Todolist todos={todos} /> : undefined}
            {todos.length > 0 ? <Footer /> : undefined}
        </section>
    );
}

export default TodoApp;