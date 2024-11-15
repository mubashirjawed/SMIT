"use client";
const DeleteButton = ({ id }) => {
  const DeleteEmployee = async () => {
    let data = await fetch(`http://localhost:3000/api/employee/${id}`, {
      method: "DELETE",
    });
    data = await data.json();
  if(data.success){
    alert("Employee deleted")
  }else{
    alert("Failed")
  }
};
  return (
    <>
      <button onClick={DeleteEmployee}>Delete</button>
    </>
  );
};

export default DeleteButton;
