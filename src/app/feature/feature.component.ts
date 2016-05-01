import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    moduleId: __moduleName,
    selector: 'feature',
    templateUrl: 'feature.component.html',
    directives: [ RouterLink ]
})
export class FeatureComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}