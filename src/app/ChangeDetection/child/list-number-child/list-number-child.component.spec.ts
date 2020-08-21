import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNumberChildComponent } from './list-number-child.component';

describe('ListNumberChildComponent', () => {
  let component: ListNumberChildComponent;
  let fixture: ComponentFixture<ListNumberChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNumberChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNumberChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
