import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any>{
    console.log("service");
    
    return this.http.get<any>('https://openlibrary.org/people/mekBot/books/want-to-read.json');
  }
}
