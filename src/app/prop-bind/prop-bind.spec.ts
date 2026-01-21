import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropBind } from './prop-bind';

describe('PropBind', () => {
  let component: PropBind;
  let fixture: ComponentFixture<PropBind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropBind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropBind);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
