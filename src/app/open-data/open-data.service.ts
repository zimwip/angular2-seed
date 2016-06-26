import { Injectable } from '@angular/core';
import {URLSearchParams, Http} from '@angular/http';
import { Manifestation } from './manifestation/manifestation.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OpenDataService {

  constructor(private http: Http) {}

  search (term: string) : Observable<Array<Manifestation>> {
    var search = new URLSearchParams()
    search.set('q', term);
    search.set('rows', '9');
    
    return this.http
              .get('https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&sort=-date_debut', { search })
              .map((response) => response.json().records);
  }

}
