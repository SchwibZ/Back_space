import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseProfComponent } from './classe-prof.component';

describe('ClasseProfComponent', () => {
  let component: ClasseProfComponent;
  let fixture: ComponentFixture<ClasseProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
