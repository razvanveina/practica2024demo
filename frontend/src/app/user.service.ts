import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './home/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 

  }

  getUsers() : Observable<IUser[]>{
    return this.http.get<IUser[]>('/api/users');
  }

  addUser(user : IUser) {
    this.http.post('/api/users', user).subscribe(() => {
      console.log("User added");
    });
  }
}
