import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-skatte-jagt',
  imports: [
    MatButton
  ],
  templateUrl: './skatte-jagt.component.html',
  styleUrl: './skatte-jagt.component.css'
})
export class SkatteJagtComponent {
  reveal_percent = 4;
}
