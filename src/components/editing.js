import CheckIcon from "./checkIcon";
import SaveIcon from "./saveIcon";

const Editing = ({ saveEdit, editingText, onEditChange }) => {
  return (
    <div
      style={{
        display: "flex",
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
        <CheckIcon width={"14"} height={"14"} color={"#ff7e5f"} />
        <input
          className="edit-input "
          type="text"
          value={editingText}
          onChange={onEditChange}
        />
      </div>

      <button className="save-btn" onClick={() => saveEdit()}>
        <SaveIcon width={"14"} height={"14"} color={"#ff7e5f"} />
      </button>
    </div>
  );
};

export default Editing;
