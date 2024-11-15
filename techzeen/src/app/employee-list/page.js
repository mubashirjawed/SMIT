import React from "react";
const getEmployees = async () => {
  let data = await fetch("http://localhost:3000/api/employee");
  data = await data.json();
  return data;
};
const EmployeeList = () => {
  return <div></div>;
};

export default EmployeeList;
