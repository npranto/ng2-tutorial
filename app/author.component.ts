import {Component} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
    selector: `author`,
    template: `
        <h3> {{title}} </h3>  
        <ul>
            <li *ngFor="#author of authors">
                {{ author }}
            </li>
        </ul>
    `,
    providers: [AuthorService]
})

export class AuthorComponent{

    title: string = 'Author';

    authors: string[];

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}