export const TodoCard = ({ todoInfo }) => {
  const { id, task, isCompleted } = todoInfo;
  return (
    <div>
      <label htmlFor={id}>
        <input type="checkbox" id={id} checked={isCompleted} />
        {task}
      </label>
    </div>
  );
};
