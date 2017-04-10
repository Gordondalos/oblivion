import { Component, OnInit, Input } from '@angular/core';
import {Config} from './config';

@Component ( {
    selector : 'app-oblivion-slider',
    templateUrl : './oblivion-slider.component.html',
    styleUrls : [ './oblivion-slider.component.css' ]
} )
export class OblivionSliderComponent implements OnInit {

    @Input ()
    importConfig : any;

    config: any = Config;

    constructor () { }

    elem: any;

    /**
     * Метод задает размеры слайдеру как указано в соотношении конфига formatSlider
     * @memberOf OblivionSliderComponent
     * @method resizeSlider
     */
    resizeSlider(){
        this.elem = document.getElementById('carouselExampleControls');
        this.config.height = this.elem.offsetWidth/this.config.formatSlider + 'px';
    }

    ngOnInit () {
        if ( this.importConfig && Object.keys ( this.importConfig ).length > 0 ) {
            this.config = this.importConfig;
        }
        setTimeout(()=>{
            this.resizeSlider()
        },10);

    }

}
