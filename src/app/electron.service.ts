import { Injectable } from '@angular/core';

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

}
