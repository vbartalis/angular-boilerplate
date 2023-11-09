import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P500Component } from './p500.component';

describe('P500Component', () => {
  let component: P500Component;
  let fixture: ComponentFixture<P500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P500Component],
    }).compileComponents();

    fixture = TestBed.createComponent(P500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
