import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Globals } from 'src/app/entity/globals';

@Component({
  selector: 'app-number-input-h',
  templateUrl: './number-input-h.component.html',
  styleUrls: ['./number-input-h.component.scss']
})
export class NumberInputHComponent implements OnInit {

  @Input() value : number = 0;
  @Output() valueChanged = new EventEmitter<number>();

  global : Globals

  constructor(global : Globals) {
    this.global = global
  }

  ngOnInit(): void {
  }

  async emitValue(value : number){
    if(this.value == 0 && value == -2.5) return;
    else await this.valueChanged.emit(value);
  }

}
