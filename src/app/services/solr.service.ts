import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class SolrService {

  constructor(private http: Http) { }

  getCustomers() : Observable<any> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get('http://localhost:8083/orders',{headers})
      .map(response => response.json());
  }

}
