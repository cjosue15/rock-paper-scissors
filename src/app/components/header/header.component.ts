import { Component, OnInit } from '@angular/core';
import { PlayService } from '../../core/services/play.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  counter: Observable<number>;
  constructor(private playService: PlayService) {
    this.counter = this.playService.counter;
  }

  ngOnInit(): void {}
}
