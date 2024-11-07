import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  let data = await req.json();
  console.log(data);
  return NextResponse.json({ result: "Sucessfull" }, { status: 200 });
};


