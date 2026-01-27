import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPerform } from './event-perform';

describe('EventPerform', () => {
  let component: EventPerform;
  let fixture: ComponentFixture<EventPerform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventPerform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventPerform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
