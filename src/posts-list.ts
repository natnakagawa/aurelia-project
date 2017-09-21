import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';

@autoinject()
export class PostsList {
    private apiUrl= 'https://wp.kit.se/wp-json';
    private posts: any;
    private selectedId = 0;
    heading="Posts";

    constructor(private http: HttpClient) {
    }

    created () {
        let client = new HttpClient();
        client.fetch(`${this.apiUrl}/discovery?job_types=article&limit=9&offset=1&exclude_native=true`)
            .then(response => response.json())
            .then(data => {
                this.posts = data;
            });
    }

    select(post) {
        this.selectedId = post.ID;
        return true;
    }
}