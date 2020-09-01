import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProfComponent } from './info-prof.component';

describe('InfoProfComponent', () => {
  let component: InfoProfComponent;
  let fixture: ComponentFixture<InfoProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
