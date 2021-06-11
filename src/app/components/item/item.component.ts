import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TypeItem } from '../../models/type';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() type: TypeItem = 'scissors';
  @Input() hasShadow: boolean = false;
  @Output() chooseItem = new EventEmitter<TypeItem>();
  constructor() {}

  ngOnInit(): void {}

  changeItem(): void {
    this.chooseItem.emit(this.type);
  }
}
