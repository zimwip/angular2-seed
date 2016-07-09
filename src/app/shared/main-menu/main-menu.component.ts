import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { OpenDataService, Authentication } from '../../services';
import { routes } from '../../';

@Pipe({ name: 'terminal'})
class TerminalPipe implements PipeTransform {
  public transform(value:Array<any>, section:string):Array<any> {

    const items:Array<any> = value;
    const newItems:Array<any> = [];

    items.forEach(function (item:any):void {
      if (item.data != undefined && item.data.menu == true && item.data.section == section) {
        newItems.push(item);
      }
    });

    return newItems;
  }
}

@Component({
  moduleId: module.id,
  selector: 'main-menu',
  templateUrl: 'main-menu.component.html',
  styleUrls: ['main-menu.component.css'],
  directives : [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  pipes: [TerminalPipe]
})
export class MainMenuComponent implements OnInit, OnDestroy {

  search = new FormControl();
  currentRoute :any ;
  sections : any = [
    {key : 'main', label : "Main Navigation"},
    {key : 'label', label : "Label"},

  ];

  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authent: Authentication,
              private openDataService: OpenDataService) {
    // bind search to query service.
    this.search.valueChanges
         .debounceTime(400)
         .distinctUntilChanged()
         .subscribe(
                     term => this.openDataService.search(term),
                     ex => console.log("OnError: {0}", ex.Message),
                     () => console.log("OnCompleted"));

  }

  ngOnInit() {
    // router analysis
    this.sub = this.route.data.subscribe(data => {
     this.currentRoute = data; // (+) converts string 'id' to a number
     // this.service.getHero(id).then(hero => this.hero = hero);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isLoggedIn():boolean {
    return this.authent.isLoggedIn();
  }

  logout():void {
    this.authent.logout();
  }

}
