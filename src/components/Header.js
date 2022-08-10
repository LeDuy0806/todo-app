import { useStore, actions } from "../store";
import { useRef } from "react";

function Header() {
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;

    return (
        <header className="header">
            <h1>todos</h1>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
            />
        </header>
    );
}

export default Header;