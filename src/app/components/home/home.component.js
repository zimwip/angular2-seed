"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var services_1 = require('../../services');
var ByteFormatPipe = (function () {
    function ByteFormatPipe() {
    }
    ByteFormatPipe.prototype.transform = function (bytes, args) {
        if (bytes == 0)
            return '0 Bytes';
        var k = 1000;
        var sizes = ['Bytes', 'KB', 'MB', 'GB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toFixed(1) + ' ' + sizes[i];
    };
    ByteFormatPipe = __decorate([
        core_1.Pipe({ name: 'byteFormat' }), 
        __metadata('design:paramtypes', [])
    ], ByteFormatPipe);
    return ByteFormatPipe;
}());
;
var HomeComponent = (function () {
    function HomeComponent(solr, wikipediaService, openDataService, electron) {
        this.solr = solr;
        this.wikipediaService = wikipediaService;
        this.openDataService = openDataService;
        this.electron = electron;
        this.title = 'app works!';
        this.formShowing = false;
        this.acOn = 'not intialized';
        this.images = [];
    }
    ;
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.electron.listen('on-ac').subscribe(function (x) { console.log("on-ac", x); _this.acOn = 'on-ac'; }, function (ex) { return console.log("OnError: {0}", ex.Message); }, function () { return console.log("OnCompleted"); });
        this.electron.listen('on-battery').subscribe(function (x) { console.log("on-battery", x); _this.acOn = 'on-battery'; }, function (ex) { return console.log("OnError: {0}", ex.Message); }, function () { return console.log("OnCompleted"); });
        this.items = this.openDataService.listen();
        this.files = this.electron.listen('listDirSuccess');
        this.electron.send('listDir', '.');
    };
    HomeComponent.prototype.handleDrop = function (e) {
        var _this = this;
        var files = e.dataTransfer.files;
        Object.keys(files).forEach(function (key) {
            if (files[key].type === "image/png" || files[key].type === "image/jpeg") {
                _this.images.push(files[key]);
            }
        });
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            pipes: [ByteFormatPipe],
            directives: [
                ng2_bootstrap_1.BUTTON_DIRECTIVES,
                router_1.ROUTER_DIRECTIVES,
            ]
        }), 
        __metadata('design:paramtypes', [services_1.SolrService, services_1.WikipediaService, services_1.OpenDataService, services_1.ElectronService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
