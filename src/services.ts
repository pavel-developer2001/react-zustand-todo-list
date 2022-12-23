import instance from "./axios.config";
import { ITodo } from "./models/todo";

export default class TodoApi {
  static async getTodos() {
    return await instance.get("/todos");
  }
  static async getTodo(id: string) {
    return await instance.get("/todos/" + id);
  }
  static async createTodo(todo: ITodo) {
    return await instance.post("/todos", todo);
  }
  static async updateTodo(todo: ITodo) {
    return await instance.patch("/todos/" + todo.id, todo);
  }
  static async removeTodo(id: string) {
    return await instance.delete("/todos/" + id);
  }
}
