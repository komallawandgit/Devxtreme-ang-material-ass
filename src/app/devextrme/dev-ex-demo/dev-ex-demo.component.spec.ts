import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevExDemoComponent } from './dev-ex-demo.component';

describe('DevExDemoComponent', () => {
  let component: DevExDemoComponent;
  let fixture: ComponentFixture<DevExDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevExDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevExDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
