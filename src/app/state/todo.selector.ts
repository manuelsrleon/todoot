import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Todo } from "../todo-list/todo.model";


export const selectTodoFeature = createFeatureSelector<{todos: Todo[]}>('todos');
export const selectTodos = createSelector(
  selectTodoFeature,
  (state) => state.todos
);
export const selectAllTodos = createSelector(selectTodos, (todos) => todos);
export const selectTodoById = (id : number) =>  createSelector(selectTodos, (todos) => todos.find((item) => item.id === id));
/*  */
