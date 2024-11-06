import { employee } from "@/app/db/db";
import { NextResponse } from "next/server";

export const GET = (req, val) => {
  //   console.log(val.params.empid);
  //   const data = employee;
  const empData = employee.filter(
    (item) => item.employeeId == val.params.empid
  );
  let result =
    empData.length == 0
      ? { result: "Not Employee Found" }
      : { result: empData };

  return NextResponse.json(result);
};
