import { Component, OnInit } from '@angular/core';
import { Control } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { OpenDataService } from '../open-data/open-data.service';

@Component({
  moduleId: module.id,
  selector: 'main-menu',
  templateUrl: 'main-menu.component.html',
  styleUrls: ['main-menu.component.css'],
  providers: [
    OpenDataService
  ],
})
export class MainMenuComponent implements OnInit {

  term = new Control();
  routes : Observable<Array<any>>;

  constructor(private openDataService: OpenDataService) {
    this.routes = this.term.valueChanges
         .debounceTime(400)
         .distinctUntilChanged()
         .switchMap(term => this.openDataService.search(term));
  }

  ngOnInit() {
  }

}
