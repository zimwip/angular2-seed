/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { WikipediaService } from './wikipedia.service';

describe('Wikipedia Service', () => {
  beforeEachProviders(() => [WikipediaService]);

  it('should ...',
      inject([WikipediaService], (service: WikipediaService) => {
    expect(service).toBeTruthy();
  }));
});
