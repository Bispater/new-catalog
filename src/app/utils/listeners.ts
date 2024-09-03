import { Injectable } from '@angular/core';
import { Subjects } from './subjects';
import moment from 'moment';
import { MetricsService } from '../services/metrics.service';

@Injectable({
  providedIn: 'root',
})
export class Listeners {
  constructor(private subject: Subjects, private service: MetricsService) {}

  events(param: any, params_override = {}): void {
    let fullUrl = param.router.url;
    const decodedUrl = decodeURIComponent(fullUrl);
    fullUrl = decodedUrl.split('?')[0];

    // get section | primary element
    let section: any = null;
    let url_splited = fullUrl.split('/');
    try {
      section = url_splited.length > 0 ? url_splited[1] : null;
    } catch (ex) {}

    // get url params
    let event: any = null;
    if (param.route) {
      param.route.queryParams.subscribe((params: any) => {
        let subsidiaryId = params['subsidiary_id'];
        let subsidiaryName = params['subsidiary_name'];
        let origin = params['origin'];
        let event = params['event'];

        if (subsidiaryId) {
          localStorage.setItem('subsidiary_id', subsidiaryId);
        }
        if (subsidiaryName) {
          localStorage.setItem('subsidiary_name', subsidiaryName);
        }
        if (origin) {
          localStorage.setItem('origin', origin);
        }
      });
    } else {
      console.error('param.route is undefined or null');
    }

    // send subject
    setTimeout(() => {
      param.route.paramMap.subscribe((params: any) => {
        let obj = {
          event: event || 'click',
          path: fullUrl,
          section: section,
          action: params.get('name') || params.get('title') || 'home',
        };
        obj = { ...obj, ...params_override };
        this._setEvent(obj);
        // new Subjects()._setEvent(obj);
      });
    }, 100);
  }

  _setEvent(event: any) {
    const storedId = localStorage.getItem('subsidiary_id');
    const storedName = localStorage.getItem('subsidiary_name');
    const origin = localStorage.getItem('origin');

    let obj = {
      '@timestamp': moment().format(),
      event: 'click',
      path: '/',
      origin: origin || 'catalogue_browser',
      section: '',
      action: '',
      subsidiary_name: storedName || 'browserStore',
      subsidiary_id: storedId || '0',
      project: 'chevrolet',
      info: this.getBrowserInfo(),
    };
    obj = { ...obj, ...event };
    this.metricService(obj);
  }

  metricService(params: any) {
    console.log("params sended", params);
    this.service.sendMetrics(params).subscribe(
      (response: any) => {
        console.log('send metrics OK', response);
      },
      (error: any) => {
        console.log('Error', error);
      }
    );
  }

  getBrowserInfo() {
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
    };
  }
}
