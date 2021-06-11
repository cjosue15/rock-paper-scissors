import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TypeItem } from '../../models/type';

@Injectable({
  providedIn: 'root',
})
export class PlayService {
  private playObservablePrivate: BehaviorSubject<TypeItem> =
    new BehaviorSubject<TypeItem>(null);

  private counterObservablePrivate: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  get playObservable(): Observable<TypeItem> {
    return this.playObservablePrivate.asObservable();
  }

  set changePlayObservable(data: TypeItem) {
    this.playObservablePrivate.next(data);
  }

  get counter(): Observable<number> {
    return this.counterObservablePrivate.asObservable();
  }

  set changeCounter(number: number) {
    this.counterObservablePrivate.next(number);
  }
}
