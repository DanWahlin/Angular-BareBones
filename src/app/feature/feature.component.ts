import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

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