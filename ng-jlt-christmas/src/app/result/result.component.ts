import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {DateTime} from 'luxon';
import {EMPTY, interval, map, NEVER, Observable} from 'rxjs';
import {AsyncPipe, isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-result',
  imports: [
    AsyncPipe
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit {
  public countdown: Observable<string> = NEVER;

  constructor(@Inject(PLATFORM_ID) private platformId: string) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.countdown = interval(500)
        .pipe(map(() => this.calculateCountdown()));
    }
  }

  calculateCountdown(): string {
    const date = DateTime.fromISO("2025-03-28T16:00")
    return date.diffNow(["days", "hours", "minutes", "seconds"]).toHuman({maximumFractionDigits: 0})
  }
}
