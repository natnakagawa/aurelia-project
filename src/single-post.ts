import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';

@autoinject()
export class SinglePost {
    private apiUrl= 'https://wp.kit.se/wp-json';
    private post: any;
    private selectedId = 0;
    heading="Posts";

    constructor(private http: HttpClient) {
    }

    created () {
        let client = new HttpClient();
        client.fetch(`${this.apiUrl}/discovery?job_types=article&limit=1&offset=0&exclude_native=true`)
            .then(response => response.json())
            .then(data => {
                this.post = data[0];
            });
    }

    select(post) {
        this.selectedId = post.ID;
        return true;
    }
}