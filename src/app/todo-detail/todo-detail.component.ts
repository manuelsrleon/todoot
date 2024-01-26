import { Component } from '@angular/core';
import { Router,RouterModule, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Todo } from '../todo-list/todo.model';
import { selectTodoById } from '../state/todo.selector';
import { CommonModule } from '@angular/common';
import { removeTodo, toggleTodo } from '../state/todo.actions';
@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [CommonModule,
            RouterModule],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store) { }

  routeSub: Subscription = new Subscription;
  todoData: Todo | undefined = undefined;
  todoNotFound: boolean = false;;

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      const todoId = +params['id'];
      this.store.select(selectTodoById(todoId)).subscribe((todo: Todo | undefined) => {
        if (todo !== undefined){
          this.todoData = todo;
        }else{
          this.todoNotFound = true;
        }

      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  toggleCompleted(id: number){
    this.store.dispatch(toggleTodo({id}));
  }
  removeTodoItem(id: number){
    this.store.dispatch(removeTodo({id}));
    this.router.navigate([""]);
  }
}
