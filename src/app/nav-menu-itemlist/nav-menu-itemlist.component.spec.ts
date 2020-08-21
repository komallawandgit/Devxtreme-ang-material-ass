import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuItemlistComponent } from './nav-menu-itemlist.component';

describe('NavMenuItemlistComponent', () => {
  let component: NavMenuItemlistComponent;
  let fixture: ComponentFixture<NavMenuItemlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuItemlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuItemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
