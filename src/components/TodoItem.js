function TodoItem({ todo, index }) {
    return (
        <li key={index} className={todo.completed ? 'completed' : " "}>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{todo.title}</label>
                <button className="destroy" ></button>
            </div>
            <input className="edit" />
        </li>
    );
}

export default TodoItem;