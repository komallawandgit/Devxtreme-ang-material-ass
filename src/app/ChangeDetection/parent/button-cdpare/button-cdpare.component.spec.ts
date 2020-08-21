import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCDPareComponent } from './button-cdpare.component';

describe('ButtonCDPareComponent', () => {
  let component: ButtonCDPareComponent;
  let fixture: ComponentFixture<ButtonCDPareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCDPareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCDPareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
