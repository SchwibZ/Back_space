import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieAdminComponent } from './vie-admin.component';

describe('VieAdminComponent', () => {
  let component: VieAdminComponent;
  let fixture: ComponentFixture<VieAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
