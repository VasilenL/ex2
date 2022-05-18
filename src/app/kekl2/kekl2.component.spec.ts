import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kekl2Component } from './kekl2.component';

describe('Kekl2Component', () => {
  let component: Kekl2Component;
  let fixture: ComponentFixture<Kekl2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kekl2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kekl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
