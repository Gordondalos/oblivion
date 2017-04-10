import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OblivionSliderComponent } from './oblivion-slider.component';

describe('OblivionSliderComponent', () => {
  let component: OblivionSliderComponent;
  let fixture: ComponentFixture<OblivionSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OblivionSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OblivionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
