/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TopMenuComponent } from './top-menu.component';

beforeEachProviders(() => [TopMenuComponent]);

describe('Component: TopMenu', () => {
  it('should create an instance',
      inject([TopMenuComponent], (component: TopMenuComponent) => {
    expect(component).toBeTruthy();
  }));
});
