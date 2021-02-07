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
        // Instanciation des étapes du jeu 
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
        // Là où on récupère les lettres
        const vowels = 'aeiouy'.split('');
        const consonants = 'bcdfghjklmnpqrstvwxz'.split('');
        // Commence-t-on par une voyelle ? 
        let isVowel = false;
        // Quelle sera la première lettre ? 
        const startingLetter = Math.random();
        if (startingLetter > 0.5) {
            isVowel = true;
        }
        // Création du palindrome
        // Si c'est un palindrome : 
        if (isPalindromus > 0.5) {
            let palindromus = '';
            // On coupe en deux moitié le palindrome
            palindromusLength = palindromusLength / 2;
            // On génère la première moitié du palindrome 
            for (let i = 0; i < palindromusLength; i++) {
                // On met en place l'alternance voyelles/consonnes
                if (isVowel == true) {
                    palindromus += vowels[Math.floor(Math.random() * vowels.length)];
                } else {
                    palindromus += consonants[Math.floor(Math.random() * consonants.length)];
                }
                isVowel = !isVowel;
            }
            // On sépare le palindrome en deux, on l'inverse et on joint les deux parties
            palindromus += palindromus
                .split('')
                .reverse()
                .join('');
            this.isPalindrome = true;
            return palindromus;
        // Si ce n'est pas un palindrome : 
        } else {
            let palindromus = '';
            for (let i = 0; i < palindromusLength; i++) {
                // On met en place l'alternance voyelles/consonnes
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
      // Si la réponse est correcte : 
      if (answer === this.isPalindrome){
        console.log('bonne réponse')
        // On incrémente le score de 1
        this.score++;
        // On regénère un palindrome et on remet le temps au maximum : 2000 ms
        this.palindromus = this.palindromusGenerator();
        this.timeLeft = 2000;
        // Toutes les 5 bonnes réponses le temps maximum se décrémente de 100 ms jusqu'à atteindre 300 ms
        if (this.timeLeft >= 300){
        this.timeLeft = this.timeLeft - Math.floor(this.score/5)*100
        console.log("Le compteur max est venu à " + this.timeLeft)
        }
      }
      // Si la réponse est incorrecte : 
      else {
        console.log('mauvaise réponse')
        // On regénère un palindrome
        this.palindromus = this.palindromusGenerator();
        // Le compteur de mauvaises réponses autorisées se décrémente de 1
        this.badAnswerLeft--
        // Quand on a plus de mauvaises réponses autorisées, le jeu s'arrête 
        if (this.badAnswerLeft === 0){
          this.ended = true;
          this.timeLeft = 0;
          window.clearInterval(this.timer);
        }
      }
    }
}
