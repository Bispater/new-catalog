import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class MetricsService {
  private apiUrl = 'https://rinnolab.cl/metrics/api/chevrolet/';

  constructor(private http: HttpClient) {}

  sendMetrics(path: string) {
    const userInfo = {
      '@timestamp': moment().format(),
      info: this.getBrowserInfo(),
      path: path,
    };
    console.log("sending : ", userInfo);

    return this.http.post(this.apiUrl, userInfo).subscribe(
      response => {
        console.log('Metrics sent successfully', response);
      },
      error => {
        console.error('Error sending metrics', error);
      }
    );
  }

  private getBrowserInfo() {
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
    };
  }
}
