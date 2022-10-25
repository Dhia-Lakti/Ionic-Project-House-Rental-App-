import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  addUser(user: any): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(user);
    console.log(body);
    return this.httpClient.post('https://first-ionic-app-abf7e-default-rtdb.firebaseio.com/users.json', body,{headers});
  }

  getUsers(): Observable<any>{
    return this.httpClient.get<any>(`https://first-ionic-app-abf7e-default-rtdb.firebaseio.com/users.json`);
  }
}
