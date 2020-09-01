import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaProfComponent } from './agenda-prof.component';

describe('AgendaProfComponent', () => {
  let component: AgendaProfComponent;
  let fixture: ComponentFixture<AgendaProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
