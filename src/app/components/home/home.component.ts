import { Component, OnInit } from '@angular/core';

// store
import { alert } from '../../store/models/alert';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET, SET, GET } from '../../store/reducers/alert';


@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  template: `
  <h2>Home</h2>
  <app-alert [alert]='alert'></app-alert>

  <button (click)="increment()">Increment</button>
        <div>Current Count: {{ (alert | async)?.count }}</div>
        <button (click)="decrement()">Decrement</button>
        <button (click)="reset()">Reset alert</button>

        <p>{{ (alert | async)?.alertMessage }}</p>
        <p>{{ (alert | async)?.alertType }}</p>

        <button (click)='set()'>Set the Alert</button>  
  `
})
export class HomeComponent implements OnInit {

  alert: Observable<alert>;

  constructor(private store: Store<alert>) {
    this.alert = store.select('alert');  
  }

  ngOnInit() { }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

  set() {
    // alertType: "Set", alertMessage: "Set Message", count: 100
    this.store.dispatch({ type: SET, payload: { alertType: "Set", alertMessage: "Set Message", count: 100 } });
  }

}
