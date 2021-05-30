import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() type: 'scissors' | 'rock' | 'paper' = 'scissors';
  constructor() {
    // this.type = this.type || 'scissors';
  }

  ngOnInit(): void {}
}
