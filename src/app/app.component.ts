import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CONFIG, TopMenuComponent, MainMenuComponent } from './shared';
import { HomeComponent, DashboardComponent } from './components';




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
  precompile: [HomeComponent, DashboardComponent]
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title) { };

  ngOnInit() { };

  public setTitle( newTitle: string) {
   this.titleService.setTitle( newTitle );
 }

}
