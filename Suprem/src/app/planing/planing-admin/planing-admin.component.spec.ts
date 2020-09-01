import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaningAdminComponent } from './planing-admin.component';

describe('PlaningAdminComponent', () => {
  let component: PlaningAdminComponent;
  let fixture: ComponentFixture<PlaningAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaningAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaningAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
