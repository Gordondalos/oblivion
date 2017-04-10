import { Component, OnInit, Input } from '@angular/core';
import { Config } from './config';

@Component ( {
    selector : 'app-oblivion-footer',
    templateUrl : './oblivion-footer.component.html',
    styleUrls : [ './oblivion-footer.component.css' ]
} )
export class OblivionFooterComponent implements OnInit {

    constructor () { }

    @Input ()
    importConfig : any;
    config : any = Config;

    ngOnInit () {
        if ( this.importConfig && Object.keys ( this.importConfig ).length > 0 ) {
            this.config = this.importConfig;
        }

    }

}
