import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieProfComponent } from './vie-prof.component';

describe('VieProfComponent', () => {
  let component: VieProfComponent;
  let fixture: ComponentFixture<VieProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
