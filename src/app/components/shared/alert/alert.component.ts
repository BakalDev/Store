import { Component, OnInit, Input } from '@angular/core';

// store
import { alert } from '../../../store/models/alert';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { GET } from '../../../store/reducers/alert';


@Component({
  selector: 'app-alert',
  styleUrls: ['./alert.component.scss'],
  template: `



  <p>Type {{ (alert | async)?.alertType }}</p>
  <p>Message {{ (alert | async)?.alertMessage }}</p>
  <p>Count {{ (alert | async)?.count }}</p>
  `
})
export class AlertComponent implements OnInit {

  @Input() alert: Observable<alert>;
  // alert;
  //  @Input() set alert(this.alert) {
  //       this._hero = Object.assign({}, value);
  //   }

  ngOnInit() {}
}
