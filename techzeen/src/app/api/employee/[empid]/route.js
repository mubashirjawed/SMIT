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

export const DELETE = (req, val) => {
  let employeeId = val.params.empid;
  if (employeeId) {
    return NextResponse.json(
      { result: "Employee Info Deleted Successfully", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "Employee Not Found", success: false },
      { status: 404 }
    );
  }
};

export const PUT = async (req, val) => {
  let payload = await req.json();
  // console.log(payload);
  payload.employeeId = val.params.empid;
  return NextResponse.json({ success: true });
};
