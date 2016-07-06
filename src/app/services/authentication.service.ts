import { Injectable, EventEmitter } from '@angular/core';
import {URLSearchParams, Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/share';

@Injectable()
export class Authentication {

  token: string;

  constructor(private http: Http) {
    this.token = localStorage.getItem('token');
  }

  login(username: string, password: string) :  Observable<boolean> {
    /*
     * If we had a login api, we would have done something like this

    return this.http.post('/auth/login', JSON.stringify({
        username: username,
        password: password
      }), {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .map((res : any) => {
        let data = res.json();
        this.token = data.token;
        localStorage.setItem('token', this.token);
      });

      for the purpose of this cookbook, we will juste simulate that
    */

    if (username === 'test' && password === 'test') {
      this.token = 'token';
      localStorage.setItem('token', this.token);
      return Observable.of(true);
    }

    return Observable.throw('authentication failure');
  }

  logout() : Observable<boolean> {
    /*
     * If we had a login api, we would have done something like this

    return this.http.get(this.config.serverUrl + '/auth/logout', {
      headers: new Headers({
        'x-security-token': this.token
      })
    })
    .map((res : any) => {
      this.token = undefined;
      localStorage.removeItem('token');
    });
     */

    this.token = undefined;
    localStorage.removeItem('token');

    return Observable.of(true);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
