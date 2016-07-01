import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { Control } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { BUTTON_DIRECTIVES  } from 'ng2-bootstrap';

import { SolrService,
         WikipediaService,
         ElectronService,
         OpenDataService } from '../../services';
import { Manifestation } from '../../model';

//import { ManifestationDetailComponent } from '../../components';


@Pipe({ name: 'byteFormat'})
class ByteFormatPipe implements PipeTransform {
  // Credit: http://stackoverflow.com/a/18650828
  transform(bytes, args) {
    if(bytes == 0) return '0 Bytes';
    var k = 1000;
    var sizes = ['Bytes', 'KB', 'MB', 'GB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toFixed(1) + ' ' + sizes[i];
  }
};


@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  pipes : [ByteFormatPipe],
  directives: [
    BUTTON_DIRECTIVES,
    ROUTER_DIRECTIVES,
//    ManifestationDetailComponent
  ]
})
export class HomeComponent implements OnInit {

  title = 'app works!';
  formShowing: boolean = false;

  acOn = 'not intialized';

  files: Observable<Array<any>>;
  images : Array<File> = [];
  items: Observable<Array<Manifestation>>;

  constructor(private solr : SolrService,
    private wikipediaService: WikipediaService,
    private openDataService: OpenDataService,
    private electron : ElectronService) {
  };

  ngOnInit()
  {
    //this.solr.getCustomers().subscribe(data => console.log(data));
    this.electron.listen('on-ac').subscribe(
                x => {console.log("on-ac", x); this.acOn='on-ac';},
                ex => console.log("OnError: {0}", ex.Message),
                () => console.log("OnCompleted"));
    this.electron.listen('on-battery').subscribe(
                x => {console.log("on-battery", x); this.acOn='on-battery';},
                ex => console.log("OnError: {0}", ex.Message),
                () => console.log("OnCompleted"));
    this.items = this.openDataService.listen();
    this.files = this.electron.listen('listDirSuccess');
    this.electron.send('listDir', '.');
  }

  handleDrop(e) {
   var files:File = e.dataTransfer.files;
   Object.keys(files).forEach((key) => {
     if(files[key].type === "image/png" || files[key].type === "image/jpeg") {
       this.images.push(files[key]);
     }
   });
   return false;
 }

}
