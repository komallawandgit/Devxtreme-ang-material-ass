import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNumberParentComponent } from './list-number-parent.component';

describe('ListNumberParentComponent', () => {
  let component: ListNumberParentComponent;
  let fixture: ComponentFixture<ListNumberParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNumberParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNumberParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
