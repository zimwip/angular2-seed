import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Control } from '@angular/common';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { OpenDataService } from '../../services';
import { Manifestation } from '../../model';
import { routes } from '../../';

@Pipe({ name: 'terminal'})
class TerminalPipe implements PipeTransform {
  public transform(value:any):any {

    const items:any = value;
    const newItems:any = [];

    items.forEach(function (item:any):void {
      if (item.data != undefined && item.data.menu == true) {
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
  directives : [ROUTER_DIRECTIVES],
  pipes: [TerminalPipe]
})
export class MainMenuComponent implements OnInit, OnDestroy {

  search = new Control();
  results :  Observable<Array<Manifestation>>;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
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
    // bind results to update facet.
    this.results = this.openDataService.listen();
    // router analysis
    this.sub = this.route.params.subscribe(params => {
     let id = +params['id']; // (+) converts string 'id' to a number
    // this.service.getHero(id).then(hero => this.hero = hero);
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
