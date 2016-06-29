/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MainMenuComponent } from './main-menu.component';

describe('Component: MainMenu', () => {
  it('should create an instance', () => {
    let component = new MainMenuComponent();
    expect(component).toBeTruthy();
  });
});
