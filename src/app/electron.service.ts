import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

declare var electron: any;

@Injectable()
export class ElectronService {

  constructor() {}

  send(channel : string, ...args)
  {
    if (electron)
    {
      electron.ipcRenderer.send(channel, args);
    }
  }

  on(channel : string, func : Function)
  {
    if (electron)
    {
      electron.ipcRenderer.on(channel, func);
    }
  }

  listen(channel : string): Observable<any>{
    return Observable.create(function (observer) {
      observer.onNext(42);
      observer.onCompleted();
      // Note that this is optional, you do not have to return this if you require no cleanup
      return function () {
          console.log('disposed');
      };
    });
  }

}
