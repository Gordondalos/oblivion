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



@NgModule ( {
    declarations : [
        AppComponent,
        NotfoundComponent,
        MainPageComponent,
        NavbarComponent,
        BaseTemplateComponent,
        FooterComponent,

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
