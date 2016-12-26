import {Component} from 'angular2/core';
import {CoursesService} from './courses.service';

@Component({
    selector: `courses`,
    template: `
        <h3> {{title}} </h3>
        <ul>
            <li *ngFor="#course of courses">
                {{ course }}
            </li>
        </ul>
    `,
    providers: [CoursesService]
})

export class CoursesComponent {

    title: string = 'Courses';
    courses: string[];

    constructor(coursesService: CoursesService){
        this.courses = coursesService.getCourses();
    }

}