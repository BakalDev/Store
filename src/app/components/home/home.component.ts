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
  
  <!-- Alert -->
  <app-alert [alert]='alert'></app-alert>
  <button (click)='set()'>Set the Alert</button>  
  `
})
export class HomeComponent implements OnInit {

  alert: Observable<alert>;

  constructor(private store: Store<alert>) {
    this.alert = store.select('alert');  
  }

  ngOnInit() { }

  set() {
    this.store.dispatch({ type: SET, payload: { 
      alertType: "Set", 
      alertMessage: "Set Message", 
      count: 100 
    }});
  }

}
