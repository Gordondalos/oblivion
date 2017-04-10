import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OblivionCardComponent } from './oblivion-card.component';

describe('OblivionCardComponent', () => {
  let component: OblivionCardComponent;
  let fixture: ComponentFixture<OblivionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OblivionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OblivionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
