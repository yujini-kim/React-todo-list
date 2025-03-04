import PlusIcon from "./plusIcon";

const Form = ({ onSubmit, toDo, onChange }) => {
  return (
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
        <PlusIcon width={"20px"} height={"20px"} color={"#ff7e5f"} />
      </button>
    </form>
  );
};

export default Form;
