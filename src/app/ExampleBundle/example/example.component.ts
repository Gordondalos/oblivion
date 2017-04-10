import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component ( {
    selector : 'app-example',
    templateUrl : './example.component.html',
    styleUrls : [ './example.component.css' ]
} )
export class ExampleComponent implements OnInit {

    constructor () { }

    searchEvent ( event ) {
        console.log ( event );
    }

    scrollToanhor (target) {
        $ ( 'html, body' ).animate ( { scrollTop : $ ( target ).offset ().top }, 800 );
    }
    importConfig;
    configNavbar;


    ngOnInit () {
    }

}
