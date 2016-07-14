import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { CONFIG, TopMenuComponent, MainMenuComponent } from './shared';
import { LoginComponent, HomeComponent, DashboardComponent } from './components';

import {AppState} from "./app.state";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MainMenuComponent,
    TopMenuComponent
  ],
  precompile: [LoginComponent, HomeComponent, DashboardComponent]
})
export class AppComponent implements OnInit {

  isMenuCollapsed:boolean = false;

  constructor(private _title: Title, private _state:AppState) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  };

  ngOnInit() { };

  public setTitle( newTitle: string) {
   this._title.setTitle( newTitle );
  }


}
