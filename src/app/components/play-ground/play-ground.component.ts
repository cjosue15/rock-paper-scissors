import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { combineLatest } from 'rxjs';
import { first } from 'rxjs/operators';
import { PlayService } from '../../core/services/play.service';
import { TypeItem } from '../../models/type';

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.scss'],
})
export class PlayGroundComponent implements OnInit {
  type: TypeItem = null;
  types: TypeItem[] = ['paper', 'rock', 'scissors'];
  pickedHouse: TypeItem;
  result: string;
  counter: number;
  resultsEnum: typeof Results = Results;
  @ViewChild('playGround') playGround: ElementRef;
  constructor(private playService: PlayService, private render: Renderer2) {
    this.pickedHouse = null;
    this.result = '';
    this.counter = 0;
    this.playGround = {} as any;
  }

  ngOnInit(): void {
    combineLatest([this.playService.playObservable, this.playService.counter])
      .pipe(first())
      .subscribe(([type, counter]) => {
        this.type = type;
        this.counter = counter;
        this.getPicked();
      });
  }

  async getPicked(): Promise<void> {
    try {
      await this.launchHousePicked();
      this.result = this.getResult(this.type, this.pickedHouse);
      this.render.addClass(this.playGround.nativeElement, 'with-results');
      if (this.result === Results.win) {
        this.playService.changeCounter = this.counter + 1;
      }
    } catch (error) {}
  }

  getResult(player: string | null, house: string | null): string {
    const results: { [key: string]: string } = {
      'paper paper': Results.draw,
      'paper rock': Results.win,
      'paper scissors': Results.defeat,
      'rock rock': Results.draw,
      'rock paper': Results.defeat,
      'rock scissors': Results.win,
      'scissors scissors': Results.draw,
      'scissors paper': Results.win,
      'scissors rock': Results.defeat,
    };

    return results[`${player} ${house}`];
  }

  launchHousePicked(): Promise<TypeItem> {
    return new Promise((resolve, reject) => {
      let picked: TypeItem;
      const interval = setInterval(() => {
        picked = this.types[this.getRandomInt(0, 3)];
        this.pickedHouse = picked;
      }, 75);

      setTimeout(() => {
        this.pickedHouse = picked;
        resolve(this.pickedHouse);
        clearInterval(interval);
      }, 2000);
    });
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  playAgain(): void {
    this.playService.changePlayObservable = null;
  }
}

enum Results {
  win = 'You win',
  defeat = 'You lose',
  draw = 'You draw',
}
