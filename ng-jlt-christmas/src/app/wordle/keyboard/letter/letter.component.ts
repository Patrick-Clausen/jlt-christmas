import {Component, Input} from '@angular/core';
import {GuessLetter} from '../../wordle-guess/wordle-guess.component';
import {MatIcon} from '@angular/material/icon';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-letter',
  imports: [
    MatIcon,
    NgClass
  ],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent {
  @Input() public letter!: GuessLetter;
}
