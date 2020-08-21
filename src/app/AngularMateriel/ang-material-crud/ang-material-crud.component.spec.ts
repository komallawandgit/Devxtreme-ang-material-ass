import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngMaterialCRUDComponent } from './ang-material-crud.component';

describe('AngMaterialCRUDComponent', () => {
  let component: AngMaterialCRUDComponent;
  let fixture: ComponentFixture<AngMaterialCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngMaterialCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngMaterialCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
