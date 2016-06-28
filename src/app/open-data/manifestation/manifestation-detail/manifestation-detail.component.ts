import { Component, OnInit, Input } from '@angular/core';

import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import { Manifestation } from '../manifestation.model';

@Component({
  moduleId: module.id,
  selector: 'manifestation-detail',
  templateUrl: 'manifestation-detail.component.html',
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
    MdIcon
  ],
  styleUrls: ['manifestation-detail.component.css']
})
export class ManifestationDetailComponent implements OnInit {

  @Input() manifestation: Manifestation;

  constructor() { }

  ngOnInit() {
  }

}
