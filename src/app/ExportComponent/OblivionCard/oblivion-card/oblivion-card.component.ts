import { Component, OnInit, Input } from '@angular/core';
import {Config} from './config';

@Component({
  selector: 'app-oblivion-card',
  templateUrl: './oblivion-card.component.html',
  styleUrls: ['./oblivion-card.component.css']
})
export class OblivionCardComponent implements OnInit {

  constructor() { }

  @Input ()
  importConfig : any;
  config: any = Config;

  ngOnInit () {
    if ( this.importConfig && Object.keys ( this.importConfig ).length > 0 ) {
      this.config = this.importConfig;
    }

  }

}
