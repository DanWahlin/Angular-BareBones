import { Component, OnInit } from 'angular2/core';
import { RouterLink } from 'angular2/router';

import { DataService } from '../shared/data.service';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
    directives: [ RouterLink ],
    providers: [ DataService ]
})
export class HomeComponent implements OnInit {
    
    projectName: string;

    constructor(private dataService: DataService) { }

    ngOnInit() { 
        this.projectName = this.dataService.getProjectName();
    }

}