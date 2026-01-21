import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DType } from './d-type';

describe('DType', () => {
  let component: DType;
  let fixture: ComponentFixture<DType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DType);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
