import { Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import {
  style,
  animate,
  transition,
  trigger,
  query,
  animateChild,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('fadeBack', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(250, style({ opacity: 1 })),
        query('@fadeContent', animateChild()),
      ]),
      transition('* => void', [
        query('@fadeContent', animateChild()),
        animate(250, style({ opacity: 0 })),
      ]),
    ]),
    trigger('fadeContent', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(100, style({ opacity: 1 })),
      ]),
      transition('* => void', [animate(100, style({ opacity: 0 }))]),
    ]),
  ],
})
export class ModalComponent implements OnInit {
  @Output() onModalClose: EventEmitter<boolean> = new EventEmitter();
  @Input() show: boolean = false;
  //   get show(): boolean {
  //     return this.showModal;
  //   }

  //   set show(value: boolean) {
  //     this.showModal = value;
  //   }
  //   showModal: boolean;
  constructor() {
    // this.showModal = false;
  }

  ngOnInit(): void {}

  close() {
    // this.render.addClass(this.modalOverlay.nativeElement, 'close');
    this.show = false;
    this.onModalClose.emit(false);
  }
}
