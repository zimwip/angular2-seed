import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';

declare var electron: any;

@Injectable()
export class ElectronService {

  constructor(private zone: NgZone) { }

  send(channel: string, ...args) {
    if (electron) {
      electron.ipcRenderer.send(channel, args);
    }
  }

  listen(channel: string): Observable<any> {
    let localZone = this.zone;
    return Observable.create(function(observer) {
      let hook = (event, args) => {
        localZone.run(() => {
          observer.next(args);
        });
      };
      if (electron) {
        electron.ipcRenderer.on(channel, hook);
      }
      else {
        observer.complete();
      }
      // Note that this is optional, you do not have to return this if you require no cleanup
      return function() {
        if (electron) {
        electron.ipcRenderer.removeListener(channel, hook);
        }
      };
    });
  }

}
