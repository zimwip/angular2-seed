import { Component, Renderer, Inject, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap';

import {AppState} from "../../app.state";

@Component({
  moduleId: module.id,
  selector: 'top-menu',
  templateUrl: 'top-menu.component.html',
  styleUrls: ['top-menu.component.css'],
  directives: [ ROUTER_DIRECTIVES, DROPDOWN_DIRECTIVES ]
})
export class TopMenuComponent implements OnInit, OnDestroy {

  public isShown:boolean = false;

  private document:any;
  private sub: any;

  public constructor(private renderer:Renderer,  @Inject(DOCUMENT) document:any,  private router: Router, private _state:AppState) {
    this.document = document;
  }

  public ngOnInit():any {
    this.sub = this.router.events.subscribe(data => {
      if (data instanceof NavigationEnd)
      {
        this.toggle(false);
      }
    });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  public toggle(isShown?:boolean):void {
    this.isShown = typeof isShown === 'undefined' ? !this.isShown : isShown;
    this._state.notifyDataChanged('menu.isCollapsed',  this.isShown);
//    if (this.document && this.document.body) {
//      this.renderer.setElementClass(this.document.body, 'sidebar-open', this.isShown);
//      if (this.isShown === false) {
//        this.renderer.setElementProperty(this.document.body, 'scrollTop', 0);
//      }
//    }
  }

}
