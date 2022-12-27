import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userURL = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {}

  // Get
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userURL);
  }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(this.userURL, user);
  }

  putUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.userURL}/${id}`, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.userURL}/${id}`);
  }
}
