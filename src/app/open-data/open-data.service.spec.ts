/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { OpenDataService } from './open-data.service';

describe('OpenData Service', () => {
  beforeEachProviders(() => [OpenDataService]);

  it('should ...',
      inject([OpenDataService], (service: OpenDataService) => {
    expect(service).toBeTruthy();
  }));
});
