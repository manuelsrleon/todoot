import { createReducer, on } from "@ngrx/store";
import { TodoState } from "./todo.state"
import * as TodoActions from './todo.actions';


export const initialState: TodoState = {
  todos: [],
  lastId: 0,
}

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, { todo }) => {
    return ({
       lastId: state.lastId + 1,
       todos: [...state.todos, {...todo, id: state.lastId + 1}]})}),
  on(TodoActions.toggleTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.map((todo) =>
  todo.id === id ?
      {...todo, completed: !todo.completed} : todo
      )
    })),
  on(TodoActions.removeTodo, (state, { id }) => ({
    lastId: state.lastId-1,
    todos: state.todos.filter((todo) => todo.id !== id),
  }))
)
