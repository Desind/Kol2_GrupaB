import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://kol2tai.herokuapp.com';

  constructor(private http: HttpClient) {

  }

  getAll() {
    return this.http.get(this.url + '/api/forum/posts');
  }

  getById(id: string | null) {
    return this.http.get(this.url + '/api/forum/posts/' + id);
  }

}
