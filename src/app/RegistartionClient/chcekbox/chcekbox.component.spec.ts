import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChcekboxComponent } from './chcekbox.component';

describe('ChcekboxComponent', () => {
  let component: ChcekboxComponent;
  let fixture: ComponentFixture<ChcekboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChcekboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChcekboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
