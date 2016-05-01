import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DataService } from '../shared/data.service';

@Component({
    moduleId: __moduleName,
    selector: 'home',
    templateUrl: 'home.component.html',
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