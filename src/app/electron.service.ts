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
      if (electron) {
        connection = electron.ipcRenderer.on(channel, function(event, args)
        {
          observer.next(args);
        });
      }
      else {
        observer.complete();
      }
      // Note that this is optional, you do not have to return this if you require no cleanup
      return function() {
        if (connection) connection.destroy();
      };
    });
  }

}
