import DeleteButton from "../components/DeleteButton";

const getEmployees = async () => {
  let response = await fetch("http://localhost:3000/api/employee");
  response = await response.json();
  return response;
};

const EmployeeList = async () => {
  const employees = await getEmployees();

  return (
    <div>
      <h1 className="bg-red-300">Employee List</h1>
      {employees.map((item) => (
        <div key={item.employeeId}>
          <h3>{item.name}</h3>
          <DeleteButton id={item.employeeId} />
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
