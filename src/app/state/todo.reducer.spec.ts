import { todoReducer, initialState } from './todo.reducer';
import * as TodoActions from './todo.actions';

describe('Todo Reducer', () => {
  it('should add a new todo to the state', () => {
    const newTodo = { id: 1, name: 'Test Todo', description: "Test description", completed: false };
    const action = TodoActions.addTodo({ todo: newTodo });

    const state = todoReducer(initialState, action);

    expect(state.todos.length).toBe(1);
    expect(state.todos[0]).toEqual({ ...newTodo, id: 1 });
    expect(state.lastId).toBe(1);
  });

  it('should toggle the completed status of a todo', () => {
    const existingTodo = { id: 1, name: 'Test Todo', description: "Test description", completed: false };
    const action = TodoActions.toggleTodo({ id: 1 });
    const initialState = { todos: [existingTodo], lastId: 1 };

    const state = todoReducer(initialState, action);

    expect(state.todos.length).toBe(1);
    expect(state.todos[0].completed).toBe(true);
    expect(state.lastId).toBe(1);
  });

  it('should remove a todo from the state', () => {
    const existingTodo = { id: 1, name: 'Test Todo', description: "Test description", completed: false };
    const action = TodoActions.removeTodo({ id: 1 });
    const initialState = { todos: [existingTodo], lastId: 1 };

    const state = todoReducer(initialState, action);

    expect(state.todos.length).toBe(0);
    expect(state.lastId).toBe(0);
  });
});
