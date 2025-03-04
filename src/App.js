import { useEffect, useState } from "react";
import "./App.css";
import Editing from "./components/editing";
import TodoList from "./components/todolist";
import Form from "./components/form";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("toDos");
    try {
      setToDos(storedTodos ? JSON.parse(storedTodos) : []);
    } catch (error) {
      console.error("에러", error);
      setToDos([]);
    }
  }, []);

  const onChange = (e) => setToDo(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo.trim() === "") return;
    const updatedTodos = [...toDos, toDo];

    setToDos(updatedTodos);
    localStorage.setItem("toDos", JSON.stringify(updatedTodos));
    setToDo("");
  };

  const deleteBtn = (idx) => {
    const updatedTodos = toDos.filter((_, index) => index !== idx);
    setToDos(updatedTodos);
    localStorage.setItem("toDos", JSON.stringify(updatedTodos));
  };

  const editBtn = (idx) => {
    setEditingIndex(idx);
    setEditingText(toDos[idx]);
  };

  const onEditChange = (e) => setEditingText(e.target.value);

  const saveEdit = (idx) => {
    const updatedTodos = [...toDos];
    updatedTodos[idx] = editingText;
    setToDos(updatedTodos);
    localStorage.setItem("toDos", JSON.stringify(updatedTodos));
    setEditingIndex(null);
  };

  return (
    <div className="container">
      <h1 className="gradient-text">My ToDo List</h1>
      <Form onSubmit={onSubmit} toDo={toDo} onChange={onChange} />
      <hr />
      {toDos.length === 0 ? (
        <p style={{ fontSize: "small", color: "gray" }}>
          "There are no registered items..."
        </p>
      ) : (
        <ul>
          {toDos.map((item, idx) => (
            <li key={idx}>
              {editingIndex === idx ? (
                <Editing
                  saveEdit={() => saveEdit(idx)}
                  editingText={editingText}
                  onEditChange={onEditChange}
                />
              ) : (
                <TodoList
                  item={item}
                  editBtn={() => editBtn(idx)}
                  deleteBtn={() => deleteBtn(idx)}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
