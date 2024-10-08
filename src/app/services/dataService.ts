import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  
  public jsonUrl = 'assets/carDetail.json';

  constructor(private http: HttpClient) {}

  getCars(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
