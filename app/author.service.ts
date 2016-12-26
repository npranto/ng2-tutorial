
export class AuthorService {

    authors: string[] = [
        'Bob',
        'Keyl',
        'James'
    ];

    getAuthors(): string[] {
        console.log(this.authors);
        return this.authors;
    }
}