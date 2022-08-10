import { actions } from "../store";

function TodoItem({ todo, index, dispatch }) {
    return (
        <li className={todo.completed ? 'completed' : " "}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed && 'checked'}
                    onChange={() => dispatch(actions.toggleTodo(index))}
                />
                <label>{todo.title}</label>
                <button className="destroy" onClick={() => dispatch(actions.deleteTodo(index))} ></button>
            </div>
            <input className="edit" />
        </li>
    );
}

export default TodoItem;