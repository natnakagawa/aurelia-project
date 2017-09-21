import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
import 'fetch';

@inject(HttpClient)
export class ContactDetail {
  routeConfig;
  private apiUrl= 'https://wp.kit.se/wp-json';
  private post: any;
  data = '';

  constructor(private http: HttpClient) {
      http.configure(config => {
            config
              .withBaseUrl('https://wp.kit.se/wp-json/');
        });
 
        this.http = http;
  }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;

    // let client = new HttpClient();
    return this.http.fetch('post/' + params.id)
        .then(response => response.json())
        .then(data => {
            this.post = data;
        });
  }
}