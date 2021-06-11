import { Component, OnInit } from '@angular/core';
import { PlayService } from '../../core/services/play.service';
import { TypeItem } from '../../models/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string | null;
  constructor(private playService: PlayService) {
    this.title = '';
  }

  ngOnInit(): void {
    this.playService.playObservable.subscribe(
      (response: string | null) => (this.title = response)
    );
  }

  chooseItem(event: TypeItem): void {
    this.playService.changePlayObservable = event;
  }
}
