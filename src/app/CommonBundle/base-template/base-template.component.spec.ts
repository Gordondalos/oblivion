import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTemplateComponent } from './base-template.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

describe('BaseTemplateComponent', () => {
  let component: BaseTemplateComponent;
  let fixture: ComponentFixture<BaseTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseTemplateComponent, NavbarComponent, FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
