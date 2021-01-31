import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { PlaygroundModule } from './playground/playground.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    HeaderModule,
    PlaygroundModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
