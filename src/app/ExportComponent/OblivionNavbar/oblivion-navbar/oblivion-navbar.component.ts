import { Component, OnInit, Input } from '@angular/core';
import { Config } from './config';

@Component({
  selector: 'app-oblivion-navbar',
  templateUrl: './oblivion-navbar.component.html',
  styleUrls: ['./oblivion-navbar.component.css']
})
export class OblivionNavbarComponent implements OnInit {

  constructor() { }

  /**
   * Импортируемый от родителя конфиг ( если передан то переопределит текущий конфига)
   */
  @Input()
  importConfig:any;

  /**
   * Текущий конфиг
   * @type {any}
   */
  config: any = Config;

  /**
   * метод инициализации, проверяет дали ли нам конфиг от родителя и если дали то устанавливает его
   * @memberOf OblivionNavbarComponent
   * @method ngOnInit
   */
  ngOnInit() {
    if(this.importConfig && Object.keys(this.importConfig).length > 0){
      this.config = this.importConfig;
    }
  }

}
