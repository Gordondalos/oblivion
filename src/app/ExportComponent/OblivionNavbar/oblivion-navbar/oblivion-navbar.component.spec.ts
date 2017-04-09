import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OblivionNavbarComponent } from './oblivion-navbar.component';

describe('OblivionNavbarComponent', () => {
  let component: OblivionNavbarComponent;
  let fixture: ComponentFixture<OblivionNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OblivionNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OblivionNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
