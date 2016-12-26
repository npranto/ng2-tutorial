
export class CoursesService {

    courses: string[] = [
        'Welcome to Angular 2',
        'Welcome to React',
        'Welcome to JS and Beyond'
    ];

    getCourses(): string[] {
        console.log(this.courses);
        return this.courses;
    }
}