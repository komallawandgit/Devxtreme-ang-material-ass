import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngMaterialTableCrudComponent } from './ang-material-table-crud.component';

describe('AngMaterialTableCrudComponent', () => {
  let component: AngMaterialTableCrudComponent;
  let fixture: ComponentFixture<AngMaterialTableCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngMaterialTableCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngMaterialTableCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
