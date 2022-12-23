import create from "zustand";
import { ITodo } from "./models/todo";
import TodoApi from "./services";

interface TodoStoreType {
  todos: ITodo[];
  isLoading: boolean;
  error: null | string;
  getTodos: () => void;
  deleteItem: (id: string) => void;
  createItem: (newTodo: ITodo) => void;
}

export const useTodos = create<TodoStoreType>()((set) => ({
  todos: [],
  isLoading: true,
  error: null,
  getTodos: async () => {
    try {
      const todos = await TodoApi.getTodos();
      set({ todos: todos.data, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
    }
  },
  deleteItem: async (id: string) => {
    await TodoApi.removeTodo(id);
    set((state) => ({
      todos: (state.todos = state.todos.filter((item) => item.id !== id)),
    }));
  },
  createItem: async (newTodo) => {
    const create = await TodoApi.createTodo(newTodo);
    set((state) => ({
      todos: [...state.todos, create.data],
    }));
  },
}));
