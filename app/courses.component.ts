import {Component} from 'angular2/core';
import {CoursesService} from './courses.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
    selector: `courses`,
    template: `
        <h3> {{title}} </h3>
        <input type="text" autoGrow>
        <ul>
            <li *ngFor="#course of courses">
                {{ course }}
            </li>
        </ul>
    `,
    providers: [CoursesService],
    directives: [AutoGrowDirective]
})

export class CoursesComponent {

    title: string = 'Courses';
    courses: string[];

    constructor(coursesService: CoursesService){
        this.courses = coursesService.getCourses();
    }

}