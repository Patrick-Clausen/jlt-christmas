import {Component, OnInit} from '@angular/core';
import {DateTime} from 'luxon';

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit {
  public countdown: string;

  constructor() {
    this.countdown = this.calculateCountdown();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.countdown = this.calculateCountdown();
    }, 500)
  }

  calculateCountdown(): string {
    const date = DateTime.fromISO("2025-03-28T16:00")
    return date.diffNow(["days", "hours", "minutes", "seconds"]).toHuman({maximumFractionDigits: 0})
  }
}
