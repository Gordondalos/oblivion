import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OblivionFooterComponent } from './oblivion-footer.component';

describe('OblivionFooterComponent', () => {
  let component: OblivionFooterComponent;
  let fixture: ComponentFixture<OblivionFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OblivionFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OblivionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
