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
    return `https://twitter.com/intent/tweet?text=Wow j'ai obtenu un score de ${this.score}. C'est Epoustoufenouil ! Je remercie @BoudjemaiRayan, @Digitalorys et @emmaajy_ pour la création de ce magnifique bijoux d'entertainment ! `
  }

}
