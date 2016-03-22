import { Injectable } from 'angular2/core';

@Injectable()
export class DataService {
    
    constructor() { }
    
    getProjectName() {
        return 'Angular 2 Bare Bones';
    }

}