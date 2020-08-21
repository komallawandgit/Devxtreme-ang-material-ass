import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotGridcompComponent } from './pivot-gridcomp.component';

describe('PivotGridcompComponent', () => {
  let component: PivotGridcompComponent;
  let fixture: ComponentFixture<PivotGridcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivotGridcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotGridcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
