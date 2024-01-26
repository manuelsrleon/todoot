import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from '../todo-list/todo.model';
import { addTodo } from '../state/todo.actions';
import { slideInAnimation } from '../animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [FormsModule,RouterModule, CommonModule],
  animations: [slideInAnimation],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {
  submitted = false;

  constructor(
    private store: Store,
    private router: Router,
  ){}

  model : Todo = {id: 0, name: "", description: "", completed: false}
  onSubmit() {
    this.submitted = true;
    this.store.dispatch(addTodo({todo: this.model}));
    this.router.navigate([""]);
  }

}
