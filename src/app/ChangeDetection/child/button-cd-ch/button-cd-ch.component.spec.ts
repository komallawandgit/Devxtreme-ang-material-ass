import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCdChComponent } from './button-cd-ch.component';

describe('ButtonCdChComponent', () => {
  let component: ButtonCdChComponent;
  let fixture: ComponentFixture<ButtonCdChComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCdChComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCdChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
