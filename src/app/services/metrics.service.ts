import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MetricsService {
  private apiUrl = 'https://rinnolab.cl/metrics/api/chevrolet/';
  token = '2b6fa9689d2a7fd69608d1d36db04e2cf52cae9c';
  headers = new HttpHeaders({
    'Authorization': `Token ${this.token}`,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {}

  sendMetrics(metrics: any): Observable<any> {
    const body = { metrics: metrics };
    return this.http.post(this.apiUrl, body, { headers: this.headers });
  }
}
