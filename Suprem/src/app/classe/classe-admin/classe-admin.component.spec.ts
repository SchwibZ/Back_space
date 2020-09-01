import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseAdminComponent } from './classe-admin.component';

describe('ClasseAdminComponent', () => {
  let component: ClasseAdminComponent;
  let fixture: ComponentFixture<ClasseAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
