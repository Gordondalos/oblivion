import { Component, OnInit, Input } from '@angular/core';
import { Config } from './config';

@Component({
  selector: 'app-oblivion-navbar',
  templateUrl: './oblivion-navbar.component.html',
  styleUrls: ['./oblivion-navbar.component.css']
})
export class OblivionNavbarComponent implements OnInit {

  constructor() { }

  @Input()
  importConfig:any;

  config: any = Config;

  ngOnInit() {
    if(this.importConfig && Object.keys(this.importConfig).length > 0){
      this.config = this.importConfig;
    }
  }

}
