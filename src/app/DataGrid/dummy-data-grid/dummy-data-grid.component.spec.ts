import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyDataGridComponent } from './dummy-data-grid.component';

describe('DummyDataGridComponent', () => {
  let component: DummyDataGridComponent;
  let fixture: ComponentFixture<DummyDataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyDataGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
