import { Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CONFIG, TopMenuComponent, MainMenuComponent } from './shared';




@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MainMenuComponent,
    TopMenuComponent
  ]
})
export class AppComponent implements OnInit {

  constructor() { };

  ngOnInit() { };

}
