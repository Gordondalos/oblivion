import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './Routing/app-routing.module';
import { NotfoundComponent } from "./NotFoundBundle/notFound.component";
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './CommonBundle/navbar/navbar.component';
import { BaseTemplateComponent } from './CommonBundle/base-template/base-template.component';
import { FooterComponent } from './CommonBundle/footer/footer.component';
import { CommonService } from "./CommonBundle/service/common.service";
import { AboutComponent } from './AboutBundle/about/about.component';
import { GuideComponent } from './GuideBundle/guide/guide.component';
import { ExampleComponent } from './ExampleBundle/example/example.component';
import { DocumentComponent } from './DocumentBundle/document/document.component';
import { OblivionNavbarComponent } from './ExportComponent/OblivionNavbar/oblivion-navbar/oblivion-navbar.component';
import { OblivionSearchFormComponent } from './ExportComponent/OblivionSearchForm/oblivion-search-form/oblivion-search-form.component';
import { OblivionSortPipe } from './ExportComponent/OblivionNavbar/oblivion-navbar/oblivion-sort.pipe';
import { OblivionSliderComponent } from './ExportComponent/OblivionSlider/oblivion-slider/oblivion-slider.component';
import { OblivionCardComponent } from './ExportComponent/OblivionCard/oblivion-card/oblivion-card.component';
import { OblivionFooterComponent } from './ExportComponent/OblivionFooter/oblivion-footer/oblivion-footer.component';





@NgModule ( {
    declarations : [
        AppComponent,
        NotfoundComponent,
        MainPageComponent,
        NavbarComponent,
        BaseTemplateComponent,
        FooterComponent,
        AboutComponent,
        GuideComponent,
        ExampleComponent,
        DocumentComponent,
        OblivionNavbarComponent,
        OblivionSearchFormComponent,
        OblivionSortPipe,
        OblivionSliderComponent,
        OblivionCardComponent,
        OblivionFooterComponent,



    ],
    imports : [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers : [CommonService],
    bootstrap : [ AppComponent ]
} )
export class AppModule {
}
