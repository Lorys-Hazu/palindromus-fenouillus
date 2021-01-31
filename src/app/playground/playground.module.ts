import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { TwitterModule } from '../twitter/twitter.module'


@NgModule({
  declarations: [PlaygroundComponent],
  imports: [
    CommonModule,
    TwitterModule
    
  ],exports:[PlaygroundComponent]
})
export class PlaygroundModule { }
