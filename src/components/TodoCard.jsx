export const TodoCard = ({ todoInfo, changeHandler, handleDelete }) => {
  const { id, task, isCompleted } = todoInfo;
  return (
    <div>
      <label htmlFor={id}>
        <input
          onChange={() => changeHandler(todoInfo)}
          type="checkbox"
          id={id}
          checked={isCompleted}
        />
        <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
          {task}
        </span>
      </label>
      <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  );
};
