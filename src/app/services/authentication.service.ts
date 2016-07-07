import { Injectable, EventEmitter } from '@angular/core';
import {URLSearchParams, Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/share';

import * as Moment from 'moment';

@Injectable()
export class Authentication {

  private tokenName : string = 'authent-token';
  token: any = undefined;

  constructor(private http: Http) {}

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
      this.token = { name : username, date : Moment()};
      localStorage.setItem(this.tokenName, JSON.stringify(this.token));
      console.log(this.token, JSON.stringify(this.token));
      return Observable.of(true);
    }
    return Observable.of(false);
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

  isLoggedIn() : boolean {
    if (typeof this.token == 'undefined')
    {
      let tokenString = localStorage.getItem(this.tokenName);
      if (typeof tokenString == 'string')
      {
        try {
          this.token = JSON.parse(tokenString);
          console.log(this.token);
        }
        catch (e){
          return false;
        }
      }
    }
    if (typeof this.token == 'undefined')
    {
      return false;
    }
    let now = Moment();
    let tokenDate = Moment(this.token.date);
    if (tokenDate.add(30,'seconds').isAfter(now))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
