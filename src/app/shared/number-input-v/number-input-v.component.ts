import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Globals } from 'src/app/entity/globals';

@Component({
  selector: 'app-number-input-v',
  templateUrl: './number-input-v.component.html',
  styleUrls: ['./number-input-v.component.scss']
})
export class NumberInputVComponent implements OnInit {

  @Input() value : number = 0;
  @Output() valueChanged = new EventEmitter<number>();

  global : Globals

  constructor(global : Globals) {
    this.global = global
  }

  ngOnInit(): void {
  }

  async emitValue(value : number){
    await this.valueChanged.emit(value);
  }

}
