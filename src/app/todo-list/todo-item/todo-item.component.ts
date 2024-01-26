import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../todo.model';
import { removeTodo,toggleTodo } from '../../state/todo.actions';
import { Store } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  constructor(private store: Store) {
  }
  @Input() todoData : Todo = {id:0, name: "", description:"", completed:false};

  removeTodoItem(id: number){
    this.store.dispatch(removeTodo({id}));
  }

  toggleCompleted(id: number){
    this.store.dispatch(toggleTodo({id}));
  }
}
