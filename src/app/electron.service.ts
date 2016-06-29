import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

declare var electron: any;

@Injectable()
export class ElectronService {

  constructor() { }

  send(channel: string, ...args) {
    if (electron) {
      electron.ipcRenderer.send(channel, args);
    }
  }

  listen(channel: string): Observable<any> {
    return Observable.create(function(observer) {
      let connection;
      let hook = (event, args) => {
        observer.next(args);
      }
      if (electron) {
        connection = electron.ipcRenderer.on(channel, hook);
      }
      else {
        observer.complete();
      }
      // Note that this is optional, you do not have to return this if you require no cleanup
      return function() {
        electron.ipcRenderer.removeListener(channel, hook);
      };
    });
  }

}
