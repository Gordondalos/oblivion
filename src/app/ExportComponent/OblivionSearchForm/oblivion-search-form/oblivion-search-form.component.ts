import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Config} from './config';


/**
 * @example
 <app-oblivion-search-form
 [importConfig]="{ placeholder: 'Search',  buttonText: 'Search' }"
 (searchEvent)="searchEvent($event)"
 ></app-oblivion-search-form>
 */

@Component({
  selector: 'app-oblivion-search-form',
  templateUrl: './oblivion-search-form.component.html',
  styleUrls: ['./oblivion-search-form.component.css']
})
export class OblivionSearchFormComponent implements OnInit {

  config: any = Config;

  @Input()
  importConfig: any;

  searchText: string;

  @Output()
  searchEvent = new EventEmitter();

  search(){
    this.searchEvent.emit(this.searchText);
  }

  constructor() { }

  ngOnInit() {
    if(this.importConfig && Object.keys(this.importConfig).length > 0){
      this.config = this.importConfig;
    }
  }

}
