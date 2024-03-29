import { Component, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ComponentActions from './app.actions';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(ComponentActions.initialize_state())
  }

}
