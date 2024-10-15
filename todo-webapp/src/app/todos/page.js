import { addTodo } from "@/actions/todos";
import Link from "next/link";

const Todos = async () => {
  let res = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache",
  });
  res = await res.json();

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl text-center font-bold">Todos</h1>
      <form action={addTodo} className=" w-2/3 mx-auto flex gap-2">
        <input
          placeholder="Enter Todo"
          type="text"
          name="todo"
          className="border-2 p-2 flex flex-grow"
        />
        <input
          type="submit"
          className="bg-purple-200 rounded p-2 px-4"
          value={"Add Todo"}
        />
      </form>

      {res.data?.map((todo) => (
        <Link key={todo.id} href={`/todos/${todo.id}`}>
          <h1 className="border p-2 text-center text-3xl w-2/3 mx-auto my-1">
            {todo.todo}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Todos;
