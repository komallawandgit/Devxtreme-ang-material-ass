import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevgrpsummComponent } from './devgrpsumm.component';

describe('DevgrpsummComponent', () => {
  let component: DevgrpsummComponent;
  let fixture: ComponentFixture<DevgrpsummComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevgrpsummComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevgrpsummComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
