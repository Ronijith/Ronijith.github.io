import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}
  getUsers() { 
    return [
    {'email':'gokul@gmail.com','password':'12345','user':'Gokul'},
    {'email':'rahul@gmail.com','password':'54321','user':'Rahul'}
  ]
}
}
