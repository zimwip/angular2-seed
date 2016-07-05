/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { D3AreaComponent } from './d3-area.component';

beforeEachProviders(() => [D3AreaComponent]);

describe('Component: D3Area', () => {
  it('should create an instance', inject([D3AreaComponent], (component: D3AreaComponent) => {
    expect(component).toBeTruthy();
  }));
});
