import { Component, OnInit } from '@angular/core';
import { Control } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import { SolrService  } from './solr.service';
import { WikipediaService } from './wikipedia.service';
import { ElectronService } from './electron.service';
import { OpenDataService } from './open-data/open-data.service';
import { Manifestation } from './open-data/manifestation/manifestation.model';
import { ManifestationDetailComponent } from './open-data/manifestation/manifestation-detail/manifestation-detail.component';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon,
    ManifestationDetailComponent
  ],
  providers: [MdIconRegistry,
    MdRadioDispatcher,
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

  items: Observable<Array<Manifestation>>;

  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    },
    {
      name: "Potential dates",
      description: "Find your soulmate!",
      icon: "pets"
    }
  ];

  constructor(private solr : SolrService,
    private wikipediaService: WikipediaService,
    private openDataService: OpenDataService,
    private electron : ElectronService) {
    this.items = this.term.valueChanges
         .debounceTime(400)
         .distinctUntilChanged()
         .switchMap(term => this.openDataService.search(term));
  };

  ngOnInit()
  {
    console.log("init app");
    //this.solr.getCustomers().subscribe(data => console.log(data));
    this.openDataService.search('*');
    this.electron.on('on-ac', function() {
      console.log('on-ac');

    });
    this.electron.on('on-battery', function() {
      console.log('on-battery');
    });
    this.electron.on('listDirSuccess', function(event, args)
    {
      console.log(args);
    });
    this.electron.send('listDir', 'D:/');
  }

}
