import { ConnectDB } from "@/app/lib/dbConnect";

export async function GET(request) {
  await ConnectDB();
  return Response.json({
    data: [],
    msg: "Blogs fetched Succssfully",
  });
}
