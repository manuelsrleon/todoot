import { createAction, props } from "@ngrx/store";
import { Todo } from "../todo-list/todo.model";

export const addTodo = createAction('[Todo] Add todo', props<{todo: Todo}>());
export const toggleTodo = createAction('[Todo] Toggle todo', props<{id: number}>());
export const removeTodo = createAction('[Todo] Remove todo', props<{id: number}>());

