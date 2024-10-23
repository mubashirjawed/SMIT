import { ConnectDB } from "@/app/lib/dbConnect";
import BlogModal from "@/app/lib/modals/BlogModal";

export async function GET(request) {
  await ConnectDB();
  const blogs = await BlogModal.find();
  console.log("MongoDB =>", blogs);

  return Response.json({
    data: blogs,
    msg: "Blogs fetched Succssfully",
  });
}
