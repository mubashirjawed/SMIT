"use client";

async function myList() {
  let Data = fetch("https://jsonplaceholder.typicode.com/users");
  Data = await Data.json();
  return Data;
}

const LoadingData = () => {
  const [Users, setUsers] = useState();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let fetchDataUsers = await myList();
      setUsers(fetchDataUsers);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Loading Data </h2>
    </>
  );
};

export default LoadingData;
