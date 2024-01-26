import { Todo } from '../todo-list/todo.model'

export interface TodoState {
  todos: Todo[];
  lastId: number;
}
