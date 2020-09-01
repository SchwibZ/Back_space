import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAdminComponent } from './note-admin.component';

describe('NoteAdminComponent', () => {
  let component: NoteAdminComponent;
  let fixture: ComponentFixture<NoteAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
