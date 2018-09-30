import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = 'https://simple-restful-api.herokuapp.com/api/v1/users';

  constructor(private http: HttpClient) { }

  getUsers(query?:String) {
    return this.http.get(this.usersUrl + query);
  }
}