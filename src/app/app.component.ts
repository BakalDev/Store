import { Component, OnInit } from '@angular/core';

// store
import { counter } from './store/models/counter';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './store/reducers/counter';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <button (click)="increment()">Increment</button>
        <div>Current Count: {{ (counter | async)?.count }}</div>
        <button (click)="decrement()">Decrement</button>
        <button (click)="reset()">Reset Counter</button>

        <p>{{ (counter | async)?.message }}</p>
  `
})

export class AppComponent implements OnInit {
    counter: Observable<counter>;

    constructor(private store: Store<counter>){
        this.counter = store.select('counter');
    }

    ngOnInit() {}

    increment(){
        this.store.dispatch({ type: INCREMENT });
    }

    decrement(){
        this.store.dispatch({ type: DECREMENT });
    }

    reset(){
        this.store.dispatch({ type: RESET });
    }

    
}
