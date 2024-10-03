import { useSelector, useDispatch } from "react-redux";
import { add, deleted, edit } from "./redux/todoSlice";
import { useState } from "react";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  const [onEdit, setOnEdit] = useState(null);
  const [editValue, setEditValue] = useState("");

  const [todo, setTodo] = useState("");

  function addTodos(e) {
    e.preventDefault();
    const user = {
      id: crypto.randomUUID(),
      todo: todo,
    };
    dispatch(add(user));
    setTodo("");
  }

  function handleEdit(e) {
    e.preventDefault();
    dispatch(edit({ id: onEdit, todo: editValue }));
    setEditValue("");
    setOnEdit(null);
  }

  return (
    <div className="Outer">
      <div className="container">
        <h1>TODO LIST</h1>
        <form onSubmit={addTodos}>
          <input
            className="input-todo"
            placeholder="add item..."
            value={todo}
            required
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="button-click">ADD</button>
        </form>

        {todos && (
          <ul className="lists">
            {todos.map((t, i) => (
              <li className="list" key={i}>
                {onEdit === t.id ? (
                  <form className="list" onSubmit={handleEdit}>
                    <input
                      style={{
                        width: "27.5rem",
                        height: "2rem",
                        borderRadius: ".5rem",
                        paddingLeft: "1rem",
                      }}
                      placeholder="edit.."
                      value={editValue}
                      required
                      onChange={(e) => {
                        setEditValue(e.target.value);
                      }}
                    />
                    <button className="button-click">Update</button>
                  </form>
                ) : (
                  <>
                    <div className="nextLine"> {t.todo}</div>

                    <div className="buttons">
                      <button
                        className="button-click"
                        onClick={() => {
                          const confirm = window.confirm("Are you Sure?");
                          confirm && dispatch(deleted(t.id));
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="button-click"
                        onClick={() => {
                          setOnEdit(t.id);
                          setEditValue(t.todo);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Todos;
