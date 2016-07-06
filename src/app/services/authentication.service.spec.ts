/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { Authentication } from './authentication.service';

describe('Authentication  Service', () => {
  beforeEachProviders(() => [Authentication]);

  it('should ...',
      inject([Authentication], (service: Authentication) => {
    expect(service).toBeTruthy();
  }));
});
