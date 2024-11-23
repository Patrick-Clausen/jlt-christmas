import {Component, Pipe, PipeTransform} from '@angular/core';
import {Guess, GuessLetter, WordleGuessComponent} from './wordle-guess/wordle-guess.component';
import {KeyboardComponent} from './keyboard/keyboard.component';

const emptyGuess: Guess = {
  letters: [
    {
      letter: "",
      incorrect: false,
      wrong_position: false,
      correct: false
    },
    {
      letter: "",
      incorrect: false,
      wrong_position: false,
      correct: false
    },
    {
      letter: "",
      incorrect: false,
      wrong_position: false,
      correct: false
    },
    {
      letter: "",
      incorrect: false,
      wrong_position: false,
      correct: false
    },
    {
      letter: "",
      incorrect: false,
      wrong_position: false,
      correct: false
    }
  ]
}

@Pipe({
  name: 'reverse',
  pure: false,
})
export class ReversePipe implements PipeTransform {
    transform(value: any[]) {
        return [...value].reverse();
    }
}

@Component({
  selector: 'app-wordle',
  imports: [
    WordleGuessComponent,
    KeyboardComponent,
    ReversePipe
  ],
  templateUrl: './wordle.component.html',
  styleUrl: './wordle.component.css'
})
export class WordleComponent {
  guesses: Guess[] = [
    this.deepCopy(emptyGuess),
  ];

  guessIndex = 0;
  letterIndex = 0;

  triedLetters: GuessLetter[] = [];

  private readonly answer = 'JANSE';

  deepCopy<T>(object: T): T {
    return JSON.parse(JSON.stringify(object));
  }

  validate(): boolean {
    const guess = this.guesses[this.guessIndex];
    guess.letters.forEach((letter, index) => {
      const found = this.answer.indexOf(letter.letter!);
      if (found < 0) {
        letter.incorrect = true;
      } else if (found === index) {
        letter.correct = true;
      } else {
        letter.wrong_position = true;
      }
      this.triedLetters = this.triedLetters.filter(previouslyTried => previouslyTried.letter !== letter.letter)
        .concat(letter);
    });
    return guess.letters.every(letter => letter.correct);
  }

  onKeyboardClick(event: string) {
    if (event === "ENTER") {
      if (this.letterIndex === 5) {
        if (this.validate()) {
          return;
        }
        this.guesses.push(this.deepCopy(emptyGuess));
        this.letterIndex = 0;
        this.guessIndex++;
      }
      return;
    }
    if (event === "BACKSPACE") {
      if (this.letterIndex > 0) {
        this.letterIndex -= 1;
        this.guesses[this.guessIndex].letters[this.letterIndex].letter = "";
      }
      return;
    }
    if (this.letterIndex < 5) {
      this.guesses[this.guessIndex].letters[this.letterIndex].letter = event;
      this.letterIndex++;
    }
  }
}
