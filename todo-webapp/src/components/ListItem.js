const ListItem = ({ todo }) => {
  return (
    <h1 className="border p-2 text-center text-3xl w-2/3 mx-auto my-1">
      {todo.todo}
    </h1>
  );
};

export default ListItem;
