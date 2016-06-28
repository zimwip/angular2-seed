/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { SolrService } from './solr.service';

describe('Solr Service', () => {
  beforeEachProviders(() => [SolrService]);

  it('should ...',
      inject([SolrService], (service: SolrService) => {
    expect(service).toBeTruthy();
  }));
});
