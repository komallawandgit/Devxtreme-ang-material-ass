import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngMaterialFormComponent } from './ang-material-form.component';

describe('AngMaterialFormComponent', () => {
  let component: AngMaterialFormComponent;
  let fixture: ComponentFixture<AngMaterialFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngMaterialFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngMaterialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
