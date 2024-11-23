import {Component, EventEmitter, Input, Output, Pipe, PipeTransform} from '@angular/core';
import {LetterComponent} from './letter/letter.component';
import {GuessLetter} from '../wordle-guess/wordle-guess.component';

@Pipe({
  name: 'triedOrDefault',
})
export class TriedOrDefaultPipe implements PipeTransform {
  transform(value: string, triedLetters: GuessLetter[]): GuessLetter {
    const found = triedLetters.find(anyLetter => anyLetter.letter === value);
    if (found) {
      return found;
    }
    return {
      correct: false, incorrect: false, letter: value, wrong_position: false
    }
  }

}

@Component({
  selector: 'app-keyboard',
  imports: [
    LetterComponent,
    TriedOrDefaultPipe
  ],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent {

  @Input() triedLetters: GuessLetter[] = [];

  @Output() clicked = new EventEmitter<string>();
  row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  row3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"];

  onClicked(value: string) {
    this.clicked.emit(value);
  }
}
