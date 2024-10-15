const todos = [
  {
    id: 1,
    todo: "Task 1",
    isCompleted: false,
  },
  {
    id: 2,
    todo: "Task 2",
    isCompleted: false,
  },
  {
    id: 3,
    todo: "Task 3",
    isCompleted: false,
  },
  {
    id: 4,
    todo: "Task 4",
    isCompleted: false,
  },
];

export async function GET(request) {
  return Response.json({
    data: todos,
    msg: "Todos Fetched Successfully",
  });
}

export async function POST(request) {
  const data = await request.json();
  console.log("Backend Data=>", data);
  return Response.json({
    data: todos,
    msg: "Todos Added Successfully",
  });
}
