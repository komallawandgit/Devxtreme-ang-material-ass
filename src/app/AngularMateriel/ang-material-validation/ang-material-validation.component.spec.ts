import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngMaterialValidationComponent } from './ang-material-validation.component';

describe('AngMaterialValidationComponent', () => {
  let component: AngMaterialValidationComponent;
  let fixture: ComponentFixture<AngMaterialValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngMaterialValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngMaterialValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
