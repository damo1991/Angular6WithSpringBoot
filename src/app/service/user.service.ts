import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../model/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'http://localhost:8080/user-portal/users';
  constructor(private http:HttpClient) { 
    }
    getUsers(){
      return this.http.get<User[]>(this.baseUrl);
    }
    getUser(id:number){
      return this.http.get<User>(this.baseUrl+'/'+id)
    }
    createUser(user:User){
        return this.http.post<User>(this.baseUrl,user)
    }
    updateUser(user:User){
      return this.http.put<User>(this.baseUrl+'/'+user.id,user)
    }
    deleteUser(id:number){
      return this.http.delete(this.baseUrl+'/'+id)
    }
}
