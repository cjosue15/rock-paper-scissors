import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/item/item.component';
import { PlayGroundComponent } from './components/play-ground/play-ground.component';
import { ModalModule } from './components/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ItemComponent,
    PlayGroundComponent,
  ],
  imports: [BrowserModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
