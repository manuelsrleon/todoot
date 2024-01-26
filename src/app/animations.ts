import { trigger, transition, query, style, group, animate, animateChild } from "@angular/animations";
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('TodoAdd => TodoList', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true }),
      ]),
    ]),
    transition('TodoList => TodoAdd', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ right: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ right: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ right: '0%' }))
        ], { optional: true }),
      ]),
    ]),
    transition('TodoList => TodoDetail', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          opacity:1,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ opacity:0 })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ opacity:0 }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ opacity:1 }))
        ], { optional: true }),
      ]),
    ]),
    transition('TodoDetail => TodoList', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          opacity:1,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ opacity:0 })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ opacity:0 }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ opacity:1 }))
        ], { optional: true }),
      ]),
    ]),
  ]);
