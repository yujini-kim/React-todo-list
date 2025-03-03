import { useState } from "react";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const onChange = (e) => setToDo(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo.trim() === "") return;
    setToDos([...toDos, toDo]);
    setToDo("");
  };

  const deleteBtn = (idx) => {
    setToDos(toDos.filter((_, index) => index !== idx));
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
    setEditingIndex(null);
  };

  return (
    <div className="container">
      <h1 className="gradient-text">My ToDo List</h1>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", gap: "5px", alignItems: "center" }}
      >
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button className="add-btn">
          <svg
            style={{ width: "20px", height: "20px", color: "#ff7e5f" }}
            dataSlot="icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
            />
          </svg>
        </button>
      </form>
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
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      style={{
                        width: "14px",
                        height: "14px",
                        color: "#ff7e5f",
                        height: "20px",
                      }}
                      dataSlot="icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                      />
                    </svg>
                    <input
                      className="edit-input "
                      type="text"
                      value={editingText}
                      onChange={onEditChange}
                    />
                  </div>

                  <button className="save-btn" onClick={() => saveEdit(idx)}>
                    <svg
                      style={{
                        width: "14px",
                        height: "14px",
                        color: "#ff7e5f",
                      }}
                      dataSlot="icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25ZM6 13.25V3.5h8v9.75a.75.75 0 0 1-1.064.681L10 12.576l-2.936 1.355A.75.75 0 0 1 6 13.25Z"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    gap: "5px",

                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <svg
                      style={{
                        width: "14px",
                        height: "14px",
                        color: "#ff7e5f",
                      }}
                      dataSlot="icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                      />
                    </svg>
                    {item}
                  </div>

                  <div style={{ display: "flex" }}>
                    <button type="button" onClick={() => editBtn(idx)}>
                      <svg
                        style={{
                          width: "14px",
                          height: "14px",
                          color: "#feb47b",
                        }}
                        dataSlot="icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                      </svg>
                    </button>
                    <button onClick={() => deleteBtn(idx)}>
                      <svg
                        style={{
                          width: "14px",
                          height: "14px",
                          color: "#feb47b",
                        }}
                        dataSlot="icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
