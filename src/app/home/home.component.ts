import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    
    projectName: string;

    constructor(private dataService: DataService) { }

    ngOnInit() { 
        this.projectName = this.dataService.getProjectName();
    }

}