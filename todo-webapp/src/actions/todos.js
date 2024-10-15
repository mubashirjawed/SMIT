"use server";

async function addTodo(formData) {
  const todo = formData.get("todo");
  console.log("todo =>", todo);
}
