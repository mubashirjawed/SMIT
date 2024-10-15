import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center m-10">
      <Link href={"/todos"}>
        <button className="bg-purple-300 rounded p-3 text-3xl font-bold text-white">
          Check All Todos
        </button>
      </Link>
    </div>
  );
}
