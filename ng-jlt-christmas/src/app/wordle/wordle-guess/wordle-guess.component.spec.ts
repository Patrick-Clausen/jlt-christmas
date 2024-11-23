import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleGuessComponent } from './wordle-guess.component';

describe('WordleGuessComponent', () => {
  let component: WordleGuessComponent;
  let fixture: ComponentFixture<WordleGuessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordleGuessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordleGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
