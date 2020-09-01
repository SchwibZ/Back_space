import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaningProfComponent } from './planing-prof.component';

describe('PlaningProfComponent', () => {
  let component: PlaningProfComponent;
  let fixture: ComponentFixture<PlaningProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaningProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaningProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
