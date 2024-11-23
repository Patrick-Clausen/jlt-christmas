import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkatteJagtComponent } from './skatte-jagt.component';

describe('SkatteJagtComponent', () => {
  let component: SkatteJagtComponent;
  let fixture: ComponentFixture<SkatteJagtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkatteJagtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkatteJagtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
