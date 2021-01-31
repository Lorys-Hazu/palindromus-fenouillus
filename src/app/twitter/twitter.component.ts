import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {

  @Input() score!: number;

  constructor() { }

  ngOnInit(): void {
  }

  getHref(){
    return `https://twitter.com/intent/tweet?text=Un score de fou malade ${this.score}&via=BoudjemaiRayan`
  }

}
