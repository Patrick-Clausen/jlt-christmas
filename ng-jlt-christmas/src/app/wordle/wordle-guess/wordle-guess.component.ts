import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

export interface GuessLetter {
  letter: string | undefined;
  incorrect: boolean;
  wrong_position: boolean;
  correct: boolean;
}

export interface Guess {
  letters: [GuessLetter, GuessLetter, GuessLetter, GuessLetter, GuessLetter];
}


@Component({
  selector: 'app-wordle-guess',
  imports: [
    NgClass
  ],
  templateUrl: './wordle-guess.component.html',
  styleUrl: './wordle-guess.component.css'
})
export class WordleGuessComponent {
  @Input() guess!: Guess;
}
