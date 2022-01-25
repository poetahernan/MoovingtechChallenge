import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ResponseModel } from '../Model/response.model';


@Injectable({
  providedIn: 'root'
})
export class MoovingtechServiceService {

  apiPrefixUrl: string = '';

  constructor(
    private http: HttpClient
  )
  {
    this.apiPrefixUrl = 'https://moovingtech.free.beeceptor.com';
  }

  GetData() {
    return this.http.get(`${this.apiPrefixUrl}/suministro`);
  }
  PostData() {
    //Metodo post deberia de ser 
    //return this.http.post<MODEL>(`${this.apiPrefixUrl}/suministro`);
    return this.http.get(`${this.apiPrefixUrl}/suministro`);
  }
}
