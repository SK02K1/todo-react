export const TodoCard = ({ todoInfo, changeHandler }) => {
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
    </div>
  );
};
