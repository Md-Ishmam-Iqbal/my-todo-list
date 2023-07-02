import db from "@/utils/db";

const getTodos = async () => {
  const todos = await db.todo.findMany({});
  return todos;
};

const TodosPage = () => {
  return <div>TodosPage</div>;
};

export default TodosPage;
