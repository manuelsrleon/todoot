import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
export const routes: Routes = [
  {path: '', component: TodoListComponent, data: {animation: 'TodoList'}},
  {path: 'add', component: TodoAddComponent, data: {animation: 'TodoAdd'}},
  {path: 'list/:id', component: TodoDetailComponent, data: {animation: 'TodoDetail'}}
];
