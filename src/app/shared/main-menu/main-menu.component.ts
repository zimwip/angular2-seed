import { Component, OnInit } from '@angular/core';
import { Control } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { OpenDataService } from '../../services';
import { Manifestation } from '../../model';

@Component({
  moduleId: module.id,
  selector: 'main-menu',
  templateUrl: 'main-menu.component.html',
  styleUrls: ['main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {

  search = new Control();
  results :  Observable<Array<Manifestation>>;

  constructor(private openDataService: OpenDataService) {
    // bind search to query service.
    this.search.valueChanges
         .debounceTime(400)
         .distinctUntilChanged()
         .subscribe(
                     term => this.openDataService.search(term),
                     ex => console.log("OnError: {0}", ex.Message),
                     () => console.log("OnCompleted"));
    // bind results to update facet.
    this.results = this.openDataService.listen();
  }


  ngOnInit() {
  }

}
