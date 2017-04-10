import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OblivionNavbarComponent } from './oblivion-navbar.component';
import { RouterTestingModule } from "@angular/router/testing";
import { OblivionSortPipe } from "./oblivion-sort.pipe";
import { OblivionSearchFormComponent } from "../../OblivionSearchForm/oblivion-search-form/oblivion-search-form.component";


describe ( 'OblivionNavbarComponent', () => {
    let component : OblivionNavbarComponent;
    let fixture : ComponentFixture<OblivionNavbarComponent>;

    beforeEach ( async ( () => {

        TestBed.configureTestingModule ( {
            imports : [
                RouterTestingModule.withRoutes ( [] )
            ],
            declarations : [
                OblivionNavbarComponent,
                OblivionSortPipe,
                OblivionSearchFormComponent
            ]
        } )
            .compileComponents ();
    } ) );

    beforeEach ( () => {
        fixture = TestBed.createComponent ( OblivionNavbarComponent );
        component = fixture.componentInstance;
        fixture.detectChanges ();
    } );

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it ( 'В компоненте должен быть установлен конфиг', function () {
        let comp = fixture.componentInstance;
        expect(comp.config).toBeDefined();
    } );

} );
