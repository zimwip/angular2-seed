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

describe('Component: TopMenu', () => {
  it('should create an instance', () => {
    let component = new TopMenuComponent();
    expect(component).toBeTruthy();
  });
});
