import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'feature',
    templateUrl: 'feature.component.html',
    directives: [ ROUTER_DIRECTIVES ]
})
export class FeatureComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}