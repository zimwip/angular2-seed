import { Injectable, EventEmitter } from '@angular/core';
import {URLSearchParams, Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/share';
import { Manifestation, Query } from '../model';

@Injectable()
export class OpenDataService {

  source : EventEmitter<Query> =  new EventEmitter<Query>();
  results: Observable<Array<Manifestation>>;

  constructor(private http: Http) {
    this.results = this.source.switchMap(
      (query : Query) : Observable<Array<Manifestation>> =>  {
        let search = new URLSearchParams()
        search.set('q', query.term);
        search.set('rows', '9');
        search.set('sort', '-date_debut');
        return this.http
                  .get('https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse', { search })
                  .map((response) => {console.log("retrieve ", response); return response.json().records;});
      }
    ).share();
  }

  search (term: string) {
    let query : Query = new Query();
    query.term = term;
    this.source.emit(query);
  }

  listen() : Observable<Array<Manifestation>> {
    return this.results;
  }

}
