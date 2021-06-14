import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [ModalComponent],
  providers: [],
})
export class ModalModule {}
