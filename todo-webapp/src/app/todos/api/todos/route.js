const todos = [
  "Task 1",
  "Task 2",
  "Task 3",
  "Task 4",
  "Task 5",
  "Task 5",
  "Task 6",
];

export async function GET(request) {
  return Response.json({
    data: todos,
    msg: "Todos Fetched Successfully",
  });
}
