import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { enterNumber } from '../../actions/calculator.action';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() input= ''

  resCalculator$: Observable<string>;
  constructor(private store: Store<{calcultor: string }>) {
    this.resCalculator$ = store.select('calcultor');
  }

  ngOnInit(): void {
  }

  clickNum(){
    this.store.dispatch(enterNumber({number:this.input}))
  }

}
