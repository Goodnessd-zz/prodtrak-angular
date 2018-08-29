import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './User';
import { Course } from './Course';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:8080/users';

  getUsers(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(this.userUrl);
  }
  constructor(private http: HttpClient) { }
}

export class UserInfo {
  user: User;
  course: Course[];
}
