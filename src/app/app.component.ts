import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './actions/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'state_01';

  // count$: Observable<number>;
  resCalculator$: Observable<string>;
 
  res = ''
  constructor(private store: Store<{calcultor: string }>) {
    this.resCalculator$ = store.select('calcultor');

    this.resCalculator$.subscribe((e:any)=>{
      console.log(e)
      this.res = e.currentNum
    })
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
  a(a:any){}
}
