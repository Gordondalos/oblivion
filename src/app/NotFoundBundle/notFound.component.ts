import { Component, OnInit } from '@angular/core';

/**
 * Компонент отрабатывает когда страница не найдена
 * @class NotfoundComponent
 * @see app/_src/js/CommonBundle/components/notFound/notFound.component.ts
 * @name NotfoundComponent
 */

@Component ( {
    selector : 'notFound',
    templateUrl : './notFound.template.html',
    styleUrls : [ './notFound.style.css' ]
} )
export class NotfoundComponent implements OnInit {
    constructor () { }


    h: number;

    ngOnInit () {
        this.h = Math.max (
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

    }
}
