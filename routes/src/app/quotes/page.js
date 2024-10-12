import Link from "next/link";
import QuoteCard from "../components/QuoteCard";

export const metadata = {
  title: "Quotes",
};

const Quotes = async () => {
  let quotes = await fetch("https://dummyjson.com/quotess", {
    cache: "no-cache",
  });

  if (!quotes.ok) {
    throw new Error("API Not working");
  }

  quotes = await quotes.json();
  console.log(quotes);

  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl text-center">Quotes</h1>
      {quotes.quotes.map((data) => (
        <Link key={data.id} href={`/quotes/${data.id}`}>
          <QuoteCard author={data.author} quote={data.quote} />
        </Link>
      ))}
    </div>
  );
};

export default Quotes;
