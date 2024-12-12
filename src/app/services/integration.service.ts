import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../model/login-request';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  API_URL: String ="http://localhost::8080/api"

  constructor(private http:HttpClient) { }

  doLogin(user: string, details: any):Observable<any>{
    console.log(details);
    return this.http.post(`${this.API_URL}/${user}/login`,details);
  }
}
