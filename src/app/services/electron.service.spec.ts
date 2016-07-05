/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ElectronService } from './electron.service';

describe('Electron Service', () => {
  beforeEachProviders(() => [ElectronService]);

  it('should ...',
      inject([ElectronService], (service: ElectronService) => {
    expect(service).toBeTruthy();
  }));
});
