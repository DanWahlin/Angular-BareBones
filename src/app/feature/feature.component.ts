import { Component, OnInit } from 'angular2/core';
import { RouterLink } from 'angular2/router';

@Component({
    selector: 'feature',
    templateUrl: 'app/feature/feature.component.html',
    directives: [ RouterLink ]
})
export class FeatureComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}