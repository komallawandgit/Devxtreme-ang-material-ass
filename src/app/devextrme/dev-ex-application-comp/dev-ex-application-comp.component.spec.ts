import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevExApplicationCompComponent } from './dev-ex-application-comp.component';

describe('DevExApplicationCompComponent', () => {
  let component: DevExApplicationCompComponent;
  let fixture: ComponentFixture<DevExApplicationCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevExApplicationCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevExApplicationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
