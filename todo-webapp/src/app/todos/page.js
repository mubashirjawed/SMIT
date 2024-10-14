import Link from "next/link";

const Todos = async () => {
  let res = await fetch("http://localhost:3000/api/todos");
  res = await res.json();

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl text-center font-bold">Todos</h1>
      {res.data?.map((todo) => (
        <Link href={`/todos/${todo}`}>
          <h1 className="border p-2 text-center text-3xl w-2/3 mx-auto my-1">
            {todo}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Todos;
