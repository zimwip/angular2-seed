import { Component, OnInit } from '@angular/core';
import { Control } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { BUTTON_DIRECTIVES  } from 'ng2-bootstrap';

import { SolrService  } from './solr.service';
import { WikipediaService } from './wikipedia.service';
import { ElectronService } from './electron.service';
import { OpenDataService } from './open-data/open-data.service';
import { Manifestation } from './open-data/manifestation/manifestation.model';
import { ManifestationDetailComponent } from './open-data/manifestation/manifestation-detail/manifestation-detail.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    BUTTON_DIRECTIVES,
    MainMenuComponent,
    TopMenuComponent,
    ManifestationDetailComponent
  ],
  providers: [
    SolrService,
    WikipediaService,
    OpenDataService,
    ElectronService
  ],
})
export class AppComponent implements OnInit {

  title = 'app works!';
  formShowing: boolean = false;

  term = new Control();

  files: Observable<Array<any>>;
  items: Observable<Array<Manifestation>>;

  constructor(private solr : SolrService,
    private wikipediaService: WikipediaService,
    private openDataService: OpenDataService,
    private electron : ElectronService) {
    this.items = this.term.valueChanges
         .debounceTime(400)
         .distinctUntilChanged()
         .switchMap(term => this.openDataService.search(term));
    this.files = this.electron.listen('listDirSuccess');
  };

  ngOnInit()
  {
    console.log("init app");
    //this.solr.getCustomers().subscribe(data => console.log(data));
    this.electron.listen('on-ac').subscribe(
                x => console.log("on-ac", x),
                ex => console.log("OnError: {0}", ex.Message),
                () => console.log("OnCompleted"));
    this.electron.listen('on-battery').subscribe(
                x => console.log("on-battery", x),
                ex => console.log("OnError: {0}", ex.Message),
                () => console.log("OnCompleted"));
    this.electron.send('listDir', '.');
  }

  handleDrop(e) {
   var files:File = e.dataTransfer.files;
   Object.keys(files).forEach((key) => {
     console.log(files[key]);
   });

   return false;
 }


}
