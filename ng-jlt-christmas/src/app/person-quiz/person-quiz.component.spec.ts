import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonQuizComponent } from './person-quiz.component';

describe('PersonQuizComponent', () => {
  let component: PersonQuizComponent;
  let fixture: ComponentFixture<PersonQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
