import CheckIcon from "./checkIcon";
import DeleteIcon from "./deleteIcon";
import EditIcon from "./editIcon";

const TodoList = ({ editBtn, deleteBtn, item }) => {
  return (
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
        <CheckIcon width={"14"} height={"14"} color={"#ff7e5f"} />
        {item}
      </div>

      <div style={{ display: "flex" }}>
        <button onClick={editBtn}>
          <EditIcon width={"14"} height={"14"} color={"#feb47b"} />
        </button>
        <button onClick={deleteBtn}>
          <DeleteIcon width={"14"} height={"14"} color={"#feb47b"} />
        </button>
      </div>
    </div>
  );
};

export default TodoList;
