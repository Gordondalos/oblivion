import { Injectable } from '@angular/core';

@Injectable ()
export class CommonService {

    constructor () { }

    /**
     * метод возвращает ширину и высоту клиентского окна.
     * @method getSize
     * @memberOf CommonService
     * @return {{wight: number, height: number}}
     */
    getSize () {
        let height = Math.max (
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );



        let width = window.innerWidth;
        return { 'wight' : width, 'height' : height };
    }

}
