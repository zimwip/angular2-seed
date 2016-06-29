import { Component, OnInit, Input } from '@angular/core';

import { Manifestation } from '../manifestation.model';

@Component({
  moduleId: module.id,
  selector: 'manifestation-detail',
  templateUrl: 'manifestation-detail.component.html',
  directives: [

  ],
  styleUrls: ['manifestation-detail.component.css']
})
export class ManifestationDetailComponent implements OnInit {

  @Input() manifestation: Manifestation;

  constructor() { }

  ngOnInit() {
  }

}
