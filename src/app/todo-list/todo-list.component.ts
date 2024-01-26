import { Component } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { selectAllTodos } from '../state/todo.selector';
import { TodoState } from '../state/todo.state';
import { Store} from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    TodoItemComponent,
    RouterModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  constructor(private store: Store<TodoState>) {}

  todos$ = this.store.select(selectAllTodos);
}
