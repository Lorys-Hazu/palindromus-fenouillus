import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {Component, OnInit} from '@angular/core';

@Component(
    {selector: 'app-playground', templateUrl: './playground.component.html', styleUrls: ['./playground.component.scss']}
)
export class PlaygroundComponent implements OnInit {
    started !: boolean;
    ended !: boolean;
    score !: number;
    timer !: number;
    timeLeft !: number;
    palindromus !: string;
    isPalindrome !: boolean;
    badAnswerLeft !: number;
    constructor() {}

    ngOnInit(): void {}

    startgame() {
        window.clearInterval(this.timer);
        this.started = true
        this.ended = false;
        this.score = 0;
        this.badAnswerLeft = 5;
        this.palindromus = this.palindromusGenerator();
        this.timeLeft = 2000;
        this.timer = window.setInterval(() => {
            this.timeLeft = this.timeLeft -1;
            if (this.timeLeft === 0) {
                this.ended = true;
                window.clearInterval(this.timer);
            }
        }, 1);
        
    }
    palindromusGenerator() {
        // Est ce que c'est un palindrome ?
        const isPalindromus = Math.random();
        // Quelle est la taille du mot ?
        let palindromusLength = Math.floor(Math.random() * 16) + 3;
        // Ou que c'est qu'on pioche les lettres
        const vowels = 'aeiouy'.split('');
        const consonants = 'bcdfghjklmnpqrstvwxz'.split('');
        // Est ce qu'on commence par une voyelle ?
        let isVowel = false;
        const startingLetter = Math.random();
        if (startingLetter > 0.5) {
            isVowel = true;
        }
        // Là ça créer le Palindrome
        if (isPalindromus > 0.5) {
            let palindromus = '';
            palindromusLength = palindromusLength / 2;
            for (let i = 0; i < palindromusLength; i++) {
                if (isVowel == true) {
                    palindromus += vowels[Math.floor(Math.random() * vowels.length)];
                } else {
                    palindromus += consonants[Math.floor(Math.random() * consonants.length)];
                }
                isVowel = !isVowel;
            }
            palindromus += palindromus
                .split('')
                .reverse()
                .join('');
            this.isPalindrome = true;
            return palindromus;
        } else {
            let palindromus = '';
            for (let i = 0; i < palindromusLength; i++) {
                if (isVowel == true) {
                    palindromus += vowels[Math.floor(Math.random() * vowels.length)];
                } else {
                    palindromus += consonants[Math.floor(Math.random() * consonants.length)];
                }
                isVowel = !isVowel;
            }
            this.isPalindrome = false;
            return palindromus;
        }

    }
    checkIsPalindrome(answer) {

      if (answer === this.isPalindrome){
        console.log('bonne réponse')
        this.score++;
        this.palindromus = this.palindromusGenerator();
        this.timeLeft = 2000;
        if (this.timeLeft >= 300){
        this.timeLeft = this.timeLeft - Math.floor(this.score/5)*100
        console.log("Le compteur max est venu à " + this.timeLeft)
        }
      }
      else {
        console.log('mauvaise réponse')
        this.palindromus = this.palindromusGenerator();
        this.badAnswerLeft--
        if (this.badAnswerLeft === 0){
          this.ended = true;
          this.timeLeft = 0;
          window.clearInterval(this.timer);
        }
      }
    }
}
